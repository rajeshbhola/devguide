---
layout: post
title: "Various CMD Commands"
tags: "cmd"
date: 2025-02-02
---

Table of Contents
- TOC
{:toc}
<br>

## Navigation & Directory Management

⦿ **cd** - Change directory

⦿ **dir** - List files/folders in the current directory

⦿ **mkdir or md** - Create a new folder

⦿ **rmdir or rd** - Remove a directory

<br><br>
 
## File Operations

⦿ **copy** - Copy files (e.g., copy file.txt C:\Backup).

⦿ **del or erase** - Delete files (e.g., del file.txt). Use /f to force-delete read-only files.

⦿ **move** - Move files (e.g., move file.txt C:\Documents).

⦿ **ren or rename** - Rename a file (e.g., ren old.txt new.txt).

⦿ **type** - Display contents of a text file (e.g., type notes.txt).

⦿ **more** - View file content page-by-page (e.g., more longfile.txt). 
<br><br>

## Network Commands

⦿ **ipconfig** - Show IP configuration. Add /all for detailed info.

⦿ **ping** - Test connectivity (e.g., ping google.com).

⦿ **tracert** - Trace the network path to a host (e.g., tracert google.com).

⦿ **netstat** - Display active network connections (use -ano to show process IDs).

⦿ **nslookup** - Query DNS records (e.g., nslookup google.com).
<br><br>

### System Information & Management

⦿ **systeminfo** - Display detailed system configuration.

⦿ **tasklist** - List all running processes.

⦿ **taskkill** - Terminate a process (e.g., taskkill /im notepad.exe /f).

⦿ **shutdown** - Shut down or restart (e.g., shutdown /s /t 0 for immediate shutdown or /r for restart).

⦿ **sfc /scannow** - Scan and repair system files (requires Admin rights).
<br><br>

## Disk & Storage

⦿ **chkdsk** - Check disk for errors (e.g., chkdsk C: /f).

⦿ **diskpart** - Advanced disk partitioning tool (launches a separate utility).

⦿ **format** - Format a disk (e.g., format D: /q for quick format).
<br><br>

## User & Permissions
⦿ **whoami** - Display the current username.

⦿ **net** - userManage user accounts (e.g., net user John shows user details).
<br><br>

## Miscellaneous

⦿ **cls** - Clear the command prompt screen.

⦿ **exit** - Close the CMD window.

⦿ **help** - List all commands (or use command /? for specific help, e.g., ping /?).

⦿ **set** - View or modify environment variables.

⦿ **robocopy** - Advanced file copying (e.g., robocopy C:\Source D:\Backup /mir).