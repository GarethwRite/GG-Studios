
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, firstName: 'john', lastName: 'jones', email: 'jj@gmail.com'},
        {id: 2, firstName: 'jane', lastName: 'smith', email: 'janeS@gmail.com'},
        {id: 3, firstName: 'sue', lastName: 'brown', email: 'sueB@gmail.com'}
      ]);
    });
};
