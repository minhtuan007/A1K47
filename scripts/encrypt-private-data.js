'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const ITERATIONS = 600000;
const ADDITIONAL_DATA = 'a1k47-student-private-v1';

function normalizeRecords(records) {
    if (!Array.isArray(records) || records.length !== 45) {
        throw new Error('Input must contain exactly 45 student records.');
    }

    return records.map((record, index) => {
        const id = String(record.id || index + 1);
        if (id !== String(index + 1)) {
            throw new Error(`Unexpected student id at position ${index + 1}.`);
        }
        return {
            id,
            birth: typeof record.birth === 'string' && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(record.birth) ? record.birth : null,
            phone: typeof record.phone === 'string' && /^0\d{9}$/.test(record.phone) ? record.phone : null,
            email: typeof record.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(record.email) ? record.email : null
        };
    });
}

function encryptRecords(records, password, outputFile) {
    if (typeof password !== 'string' || password.length < 14) {
        throw new Error('PRIVATE_DATA_PASSWORD must contain at least 14 characters.');
    }

    const normalizedRecords = normalizeRecords(records);
    const salt = crypto.randomBytes(16);
    const iv = crypto.randomBytes(12);
    const key = crypto.pbkdf2Sync(password, salt, ITERATIONS, 32, 'sha256');
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
    cipher.setAAD(Buffer.from(ADDITIONAL_DATA, 'utf8'));
    const plaintext = Buffer.from(JSON.stringify(normalizedRecords), 'utf8');
    const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final(), cipher.getAuthTag()]);
    const envelope = {
        version: 1,
        kdf: {
            name: 'PBKDF2',
            hash: 'SHA-256',
            iterations: ITERATIONS,
            salt: salt.toString('base64')
        },
        cipher: {
            name: 'AES-GCM',
            iv: iv.toString('base64'),
            tagLength: 128,
            additionalData: ADDITIONAL_DATA
        },
        ciphertext: ciphertext.toString('base64')
    };

    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    fs.writeFileSync(outputFile, `${JSON.stringify(envelope, null, 2)}\n`, { encoding: 'utf8', mode: 0o600 });
}

function parseArguments(argv) {
    const inputIndex = argv.indexOf('--input');
    const outputIndex = argv.indexOf('--output');
    return {
        input: inputIndex >= 0 ? argv[inputIndex + 1] : null,
        output: outputIndex >= 0 ? argv[outputIndex + 1] : 'data/student-private.enc.json'
    };
}

function main() {
    const args = parseArguments(process.argv.slice(2));
    if (!args.input) {
        throw new Error('Usage: node scripts/encrypt-private-data.js --input <private-json-outside-public-root> [--output <encrypted-json>]');
    }
    const password = process.env.PRIVATE_DATA_PASSWORD;
    const records = JSON.parse(fs.readFileSync(path.resolve(args.input), 'utf8'));
    encryptRecords(records, password, path.resolve(args.output));
    console.log(`Encrypted ${records.length} records to ${args.output}.`);
}

if (require.main === module) {
    try {
        main();
    } catch (error) {
        console.error(error.message);
        process.exitCode = 1;
    }
}

module.exports = { encryptRecords, normalizeRecords };
