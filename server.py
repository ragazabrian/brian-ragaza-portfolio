#!/usr/bin/env python3
"""
Simple HTTP Server for MetaLab Clone (HTML/CSS/JS)
Run: python3 server.py
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and proper caching
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def guess_type(self, path):
        # Ensure correct MIME types for woff2 and mp4
        if path.endswith('.woff2'):
            return 'font/woff2'
        if path.endswith('.woff'):
            return 'font/woff'
        if path.endswith('.mp4'):
            return 'video/mp4'
        if path.endswith('.svg'):
            return 'image/svg+xml'
        return super().guess_type(path)

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    socketserver.TCPServer.allow_reuse_address = True
    
    with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
        print(f"🚀 MetaLab Clone running at http://localhost:{PORT}")
        print("Press Ctrl+C to stop.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    main()
