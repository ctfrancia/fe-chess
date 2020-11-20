<template>
  <div id="registration-wrapper">
    <h1> Register </h1>
    <form action="api/user/signup" method="POST">
        <input type="hidden" name="csrf_token" value="">
        <div>
            <label>Nombre:</label>
            <input type="text" name="firstName" value="">
        </div>
        <div>
            <label>Apellido(s):</label>
            <input type="text" name="lastName" value="">
        </div>
        <div>
            <label>Correo Electronico:</label>
            <input type="email" name="email" value="">
        </div>
        <div>
            <label>Contraseña:</label>
            <input type="password" name="password">
        </div>

        <div>
            <label>Verificar Contraseña:</label>
            <input type="password" name="retypePassword">
        </div>


        <div>
            <label>Club de Ajerez(opcional):</label>
            <input type="text" name="chessClub">
        </div>

        <div>
            <label>ELO Clásico(opcional)</label>
            <input type="number" name="retypePassword">
        </div>

        <div>
            <label>ELO Rápido(opciona)</label>
            <input type="number" name="retypePassword">
        </div>

        <div>
            <label>Nombre de Usuario Chess.com(opcional)</label>
            <input type="number" name="retypePassword">
        </div>

        <div>
            <label>Nombre de Usuario Lichess.org(opcional)</label>
            <input type="number" name="retypePassword">
        </div>

        <div>
            <input type="submit" value="Submit">
        </div>

    </form>
  </div>
</template>
