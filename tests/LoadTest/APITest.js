import http from 'k6/http';

export default function () {
    let url = 'http://127.0.0.1:8000/hrapi/staff/list';
    const payload = JSON.stringify({
        hint:  'G}h{m2Dw;FW9Jabc'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);
}

// Run command:  k6 run ~/Documents/github/devops_hr_system/tests/LoadTest/APITest.js
