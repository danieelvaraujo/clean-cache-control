# Gravar Compras no Cache

> ## Caso de sucesso
1. O sistema executa o comando "Salvar Compras"
2. O sistema cria uma data para ser armazenada no cache
3. O sistema apaga os dados do cache atual
4. O sistema grava os novos dados no cache
5. O sistema não retorna nenhum erro

> ## Exceção - Erro ao apagar dados do cache
1. Sistema retorna erro

> ## Exceção - Erro ao gravar dados do cache
1. Sistema retorna erro