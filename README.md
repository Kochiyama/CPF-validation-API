# CPF validation

to validate an cpf:
send a ***GET*** requisition with json body like:
```
{
  "cpf": "00100200345"
}
```

to https://cpf-validator.herokuapp.com/validate

it returns true for a valid CPF.
or false to a invalid CPF