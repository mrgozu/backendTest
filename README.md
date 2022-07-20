# backendTest

- Docker
    - Crear volumen: docker volume create backendTest-postgresql-volume
    - Obtener imagen: docker pull postgres
    - Ejecutar imagen: docker run -p 54320:5432 --name backendTest -e POSTGRES_PASSWORD=root -v backendTest-postgresql-volume:/db -d postgres
