<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$db   = 'cursosteste';

// conecta com o banco de dados
$con = mysql_connect($host, $user, $pass);

// seleciona o banco de dados
mysql_select_db($db);

// efetua a consulta
$sql = "SELECT * FROM CURSOS ORDER BY TITULO";
$res = mysql_query($sql);

// total de resultados
$total = mysql_num_rows($res);

echo "<p>Total de Resultados: " . $total . "</p>";

// loop pelos resultados
while ($f = mysql_fetch_array($res)) {
    echo "<p>" . $f['nome'] . " | " .
        $f['email'] . " | " .
        $f['salario'] . " | " .
        date('d/m/Y', strtotime($f['nascimento'])) . "</p>";
}

// fecha a conexão
mysql_close();
