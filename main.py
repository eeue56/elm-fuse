#!/usr/bin/env python3

import asyncio
import websockets
import datetime
import random
import os 

FILE_NAME = "viewports"


async def time(websocket, path):
    file_time_stored = os.stat(FILE_NAME).st_mtime
    while True:
        file_time_current = os.stat(FILE_NAME).st_mtime
        if file_time_stored != file_time_current:
            file_time_stored = os.stat(FILE_NAME).st_mtime
            with open(FILE_NAME) as f:
                text = f.read()
            await websocket.send(text)
        await asyncio.sleep(random.random() * 3)

start_server = websockets.serve(time, 'localhost', 8080)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()