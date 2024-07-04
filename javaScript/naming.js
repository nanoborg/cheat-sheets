// camelCase (used in JS) - 3 letters or more. userIO
// PascalCase
// snake_case
// kebab-case

// ====================================================
// Verbs -  
//      get     has     say     went    use     find    call    ask     start   show    play    run     move    set     change      create      add     hide    show    in      as      toggle  
// ====================================================

// ====================================================
// Boolean - answers to questions (is, are, has, was, can) - prefix isValid
// ====================================================
var isVisible = true;
var areEqual = false;
var hasEncryption = true;


// ====================================================
// Functions - verbs (get, findBy, setValue, calculate)
// ====================================================
function getName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

function findUserByName() {
    // describing method
}


// ====================================================
// Class - PascalCase
// ====================================================
class SoftwareDeveloper {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
   
  var me = new SoftwareDeveloper('Robin', 'Wieruch');


// ====================================================
// db queries - verbs (create, find, get, set, add, remove, reset)
// ====================================================
function create_user(email, password) {
    password_digest = BCrypt.Password.create(password)
    sql = "INSERT INTO users (email, password_digest) VALUES ($1, $2);"
    run_sql(sql, [email, password_digest])
}