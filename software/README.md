# Volunteer Help App (React + Node.js) - Enhanced template
Estrutura com frontend React (Vite) e backend Node.js (Express).
Recursos adicionados:
- Login simples (/api/login). Usuários demo: admin/admin123 e volunteer/help
- Token em localStorage. Endpoints protegidos usam Authorization Bearer <token>.
- Formulário para criar serviço no frontend (requer login).
- Logout.
- Script root para rodar cliente + servidor com concurrently.

Rodar:
1) Instalar dependências do root (concurrently):
   - cd /path/to/project
   - npm install
2) Instalar server e client:
   - cd server && npm install
   - cd ../client && npm install
3) Rodar tudo:
   - cd .. && npm run start

Observação: protótipo. Não usar em produção. Senhas em texto plano. Tokens simples.
