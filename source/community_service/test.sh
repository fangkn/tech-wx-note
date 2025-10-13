#!/bin/bash

curl http://127.0.0.1:8000/community/welcome/ | jq .


curl http://127.0.0.1:8000/community/banner/ | jq .

curl http://127.0.0.1:8000/community/notice/ | jq .
