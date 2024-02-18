<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: "index",
  
  created() {
    //moved the auth checking to dashboard layout
    //this index is for both dashboard and public pages 

    //this is a local user details for auth
    // localStorage.setItem("stockbooster", `%7B%22firstName%22%3A%22Joy%20Michelle%22%2C%22lastName%22%3A%22%22%2C%22phoneNumber%22%3A%22716430328%22%2C%22email%22%3Anull%2C%22outletName%22%3A%22Joy%20Michelle%20Stores%22%2C%22outletAddress%22%3A%22%22%2C%22landmark%22%3A%22%22%2C%22retailChannel%22%3A%22%22%2C%22region%22%3A%22%22%2C%22state%22%3A%22%22%2C%22lga%22%3A%22%22%2C%22territoryId%22%3Anull%2C%22loyaltyPoint%22%3A0%2C%22urno%22%3A%22254716430328%22%2C%22rcS8Number%22%3A%2210020891%22%2C%22id%22%3A%22ba6c3040-68cf-463f-9c42-08d939f69bb2%22%2C%22token%22%3A%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEyNyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJ3ZWJhcHAiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6Ikw2U1MzUzZXVlVCNzdUR0pYMkNJWEJFUVNSTUtQUjNIIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiOTBjNzk4ODkxYjE2NGE0NjlkNGNmZWQ5NTcyYzEwZmMiLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiI4Iiwic3ViIjoiMTI3IiwianRpIjoiMjYyZTU3YmItYWIxOS00ZWNmLTg4ZDktOTk1Mzg0MTA0ZjVkIiwiaWF0IjoxNjQ1NDQ5ODE3LCJ0b2tlbl92YWxpZGl0eV9rZXkiOiJkNzYyODQ1Ny03ZDI2LTQ0NTQtYjRhOS1lMWQ0ZjkxYTA5MjEiLCJ1c2VyX2lkZW50aWZpZXIiOiIxMjdAOCIsInRva2VuX3R5cGUiOiIwIiwibmJmIjoxNjQ1NDQ5ODE3LCJleHAiOjE2NzY5ODU4MTcsImlzcyI6IlJldGFpbERlbW8iLCJhdWQiOiJSZXRhaWxEZW1vIn0.wYN7DdrLdYYzPN-UpNfJ88HInPgcrbUxchrfWVUwqio%22%2C%22country%22%3A%7B%22tenantId%22%3A8%2C%22tenantName%22%3A%22Kenya%22%2C%22urnoPrefix%22%3A%22254%22%2C%22currency%22%3A%22Ksh%22%7D%7D`)
  },
};
</script>