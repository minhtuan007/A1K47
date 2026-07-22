'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { encryptRecords, normalizeRecords } = require('./encrypt-private-data');

function decryptRecords(envelope, password) {
    const encrypted = Buffer.from(envelope.ciphertext, 'base64');
    const authenticationTagLength = envelope.cipher.tagLength / 8;
    const ciphertext = encrypted.subarray(0, -authenticationTagLength);
    const authenticationTag = encrypted.subarray(-authenticationTagLength);
    const key = crypto.pbkdf2Sync(
        password,
        Buffer.from(envelope.kdf.salt, 'base64'),
        envelope.kdf.iterations,
        32,
        'sha256'
    );
    const decipher = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(envelope.cipher.iv, 'base64'));
    decipher.setAAD(Buffer.from(envelope.cipher.additionalData, 'utf8'));
    decipher.setAuthTag(authenticationTag);
    return JSON.parse(Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString('utf8'));
}

function main() {
    const fileIndex = process.argv.indexOf('--file');
    const file = path.resolve(fileIndex >= 0 ? process.argv[fileIndex + 1] : 'data/student-private.enc.json');
    const oldPassword = process.env.PRIVATE_DATA_OLD_PASSWORD;
    const newPassword = process.env.PRIVATE_DATA_PASSWORD;
    if (!oldPassword || !newPassword) {
        throw new Error('Both old and new password environment variables are required.');
    }

    const envelope = JSON.parse(fs.readFileSync(file, 'utf8'));
    const records = normalizeRecords(decryptRecords(envelope, oldPassword));
    encryptRecords(records, newPassword, file);
    console.log(`Re-encrypted ${records.length} records with a fresh salt and IV.`);
}

try {
    main();
} catch (error) {
    console.error(error.code === 'ERR_OSSL_BAD_DECRYPT' || /authenticate data/.test(error.message)
        ? 'Mật khẩu hiện tại không đúng hoặc bản mã đã bị thay đổi.'
        : error.message);
    process.exitCode = 1;
}
