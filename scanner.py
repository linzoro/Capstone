import socket
import requests
import nmap

def scan_ports(target):
    """Scan open target port."""
    print(f"Scanning open ports on {target}...")
    scanner = nmap.PortScanner()
    scanner.scan(target, '1-3001')
    for host in scanner.all_hosts():
        for proto in scanner[host].all_protocols():
            ports = scanner[host][proto].keys()
            for port in ports:
                print(f"[+] Open Port: {port}/{proto}")

def check_ssl(target):
    """Check for weak SSL/TLS configurations."""
    try:
        response = requests.get(f"https://{target}", verify=False)
        print(f"[+] {target} supports HTTPS (SSL/TLS Enabled)")
    except requests.exceptions.SSLError:
        print(f"[-] {target} has SSL/TLS Issues!")

def check_sql_injection(target):
    """Basic SQL Injection detection."""
    payload = "' OR '1'='1"
    url = f"http://{target}/login.php?username=admin&password={payload}"
    try:
        response = requests.get(url)
        if "Welcome" in response.text or "admin" in response.text:
            print(f"[!] Possible SQL Injection vulnerability found at {url}")
        else:
            print(f"[+] No SQL Injection detected at {url}")
    except:
        print(f"[-] Failed to check SQL Injection on {target}")

def check_xss(target):
    """Basic XSS vulnerability check."""
    payload = "<script>alert('XSS')</script>"
    url = f"http://{target}/search.php?q={payload}"
    try:
        response = requests.get(url)
        if payload in response.text:
            print(f"[!] Possible XSS vulnerability found at {url}")
        else:
            print(f"[+] No XSS vulnerability detected at {url}")
    except:
        print(f"[-] Failed to check XSS on {target}")

if __name__ == "__main__":
    target = input("Enter target IP or domain: ")
    scan_ports(target)
    check_ssl(target)
    check_sql_injection(target)
    check_xss(target)
