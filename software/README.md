# Volunteer Help App (React + Node.js) - Enhanced template
Estrutura com frontend React (Vite) e backend Node.js (Express).
Recursos adicionados:
- Login simples (/api/login). Usuários demo: admin/admin123 e volunteer/help
- Token em localStorage. Endpoints protegidos usam Authorization Bearer <token>.
- Formulário para criar serviço no frontend (requer login).
- Logout.
- Script root para rodar cliente + servidor com concurrently.

Renomeie `/server/.env.example` para `/server/.env` e insira essas credenciais no arquivo:
`DATABASE_URI=mongodb+srv://mainUser:password1234@cluster0.wg2vsmu.mongodb.net/AJUDEI?appName=Cluster0`

Rodar:
1) Instalar dependências do root (concurrently):
   - cd /path/to/project
   - npm install
2) Instalar server e client:
   - cd server && npm install
   - cd ../client && npm install
4) Instalar MongoDB e mongoose
   - cd ../server
   - npm install dotenv
   - npm install mongodb
   - npm i mongoose
3) Rodar tudo:
   - cd .. && npm run start

Observação: protótipo. Não usar em produção. Senhas em texto plano. Tokens simples.
