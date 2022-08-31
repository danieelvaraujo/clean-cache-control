# Carregar Compras do Cache

> ## Caso de sucesso

1. O sistema executa o comando "Carregar Compras"
2. O sistema carrega os dados do cache
3. O sistema valida se o cache tem menos de 3 dias
4. O sistema cria uma lista de compras a partir dos dados do cache
5. O sistema retorna a lista de compras

> ## Exceção - Cache expirado

1. O sistema limpa o cache
2. O sistema retorna uma lista vazia

> ## Exceção - Cache vazio

1. Sistema retorna erro
