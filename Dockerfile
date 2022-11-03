# 베이스 이미지
FROM node:10 AS builder

# 실행하는 명령어
RUN apt-get update

WORKDIR /app

## 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
## 와일드카드를 사용
#COPY package*.json ./

## 앱 소스 추가
COPY . .

RUN npm install
## 프로덕션을 위한 코드를 빌드하는 경우
## RUN npm ci --only=production

RUN npm run build
# CMD [ "npm", "run", "start" ]
# CMD [ "nginx", "-g", "daemon off;" ]

#EXPOSE 7070:80


FROM node:10-alpine
WORKDIR /app
## step 1의 builder에서 build된 프로젝트를 가져온다
COPY --from=builder /app ./

## application 실행
CMD ["npm", "run", "start"]