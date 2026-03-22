import {
  addColumns,
  schemaMigrations,
} from "@nozbe/watermelondb/Schema/migrations";

/*
 * Las migraciones mas actuales deben quedar siempre al inicio o arriba de la anterior
 * En desarrollo si se hara una actualización es mejor detener servidor y hacer la actualización para evitar problemas,
 * se puede pensar que no funcionara
 * Tuve que comentar migrations en el index.ts y los cambios en las tablas y los modelos, para que quedara la version 1
 * arranque y probe la version 1, luego cancele el servidor hice los cambios a la version 2 y arranque y funciono correctamente
 * la migración fue un éxito
 */
export default schemaMigrations({
  migrations: [
    {
      toVersion: 3,
      steps: [
        addColumns({
          table: "accounts",
          columns: [
            { name: "created_at", type: "number" },
            { name: "updated_at", type: "number" },
          ],
        }),
        addColumns({
          table: "allocations",
          columns: [{ name: "updated_at", type: "number" }],
        }),
        addColumns({
          table: "account_allocations",
          columns: [{ name: "updated_at", type: "number" }],
        }),
      ],
    },
    {
      toVersion: 2,
      steps: [
        addColumns({
          table: "accounts",
          columns: [{ name: "user_id", type: "string" }],
        }),
        addColumns({
          table: "allocations",
          columns: [{ name: "user_id", type: "string" }],
        }),
        addColumns({
          table: "account_allocations",
          columns: [{ name: "user_id", type: "string" }],
        }),
      ],
    },
  ],
});
