#!/usr/bin/env python3
import http.server
import socketserver
import sys
import os

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
ROOT = sys.argv[2] if len(sys.argv) > 2 else '.'

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Don't cache JavaScript and JSON files
        if self.path.endswith(('.js', '.json')):
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        else:
            self.send_header('Cache-Control', 'public, max-age=3600')
        super().end_headers()

os.chdir(ROOT)
with socketserver.TCPServer(('', PORT), NoCacheHandler) as httpd:
    print(f'Server started on port {PORT}', flush=True)
    httpd.serve_forever()
