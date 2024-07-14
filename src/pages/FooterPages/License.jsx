import React from 'react'

function License() {
    return (
        <div className="bg-cyan-100 p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">License</h1>

            <p className="text-lg mb-4">
                This project is licensed under the MIT License. This means you are free to use, modify, and distribute this software, provided that the following conditions are met:
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm mb-4 overflow-auto">
                {`MIT License

Copyright (c) 2024 Aakash Patel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`}
            </pre>
            <p className="text-lg mb-4">
                By using this software, you agree to the terms of the MIT License. You can find the full text of the MIT License above.
            </p>

            <p className="text-lg mb-4">
                If you have any questions about this license or the terms of use, please feel free to contact us at [Your Contact Information].
            </p>
        </div>
    )
}

export default License
