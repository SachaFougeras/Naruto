/*Â© Nicolas DUBIEN - 2006*/
var joueurdebut = 0;
var nbjeucpu = 0;
var joueur = 0;
var utiltechnique = 0;
var casejoueur = " ";
var fin = 0;
var victoire0 = 0;
var victoire1 = 0;
var victoire2 = 0;

function changejoueur() {
    joueur++;
    if (joueur == 2) joueur = 0;
}

function affichechoix(casejoue) {
    if (joueur == 0) casejoueur = "Sasuke";
    else casejoueur = "Naruto";
    if (casejoue == 0) {
        document.morpion.case0.value = casejoueur;
        document.morpion.case0.id = "joueur" + (joueur + 1);
    }
    if (casejoue == 1) {
        document.morpion.case1.value = casejoueur;
        document.morpion.case1.id = "joueur" + (joueur + 1);
    }
    if (casejoue == 2) {
        document.morpion.case2.value = casejoueur;
        document.morpion.case2.id = "joueur" + (joueur + 1);
    }
    if (casejoue == 3) {
        document.morpion.case3.value = casejoueur;
        document.morpion.case3.id = "joueur" + (joueur + 1);
    }
    if (casejoue == 4) {
        document.morpion.case4.value = casejoueur;
        document.morpion.case4.id = "joueur" + (joueur + 1);
    }
    if (casejoue == 5) {
        document.morpion.case5.value = casejoueur;
        document.morpion.case5.id = "joueur" + (joueur + 1);
    }
    if (casejoue == 6) {
        document.morpion.case6.value = casejoueur;
        document.morpion.case6.id = "joueur" + (joueur + 1);
    }
    if (casejoue == 7) {
        document.morpion.case7.value = casejoueur;
        document.morpion.case7.id = "joueur" + (joueur + 1);
    }
    if (casejoue == 8) {
        document.morpion.case8.value = casejoueur;
        document.morpion.case8.id = "joueur" + (joueur + 1);
    }
}

function gagnant(jeu) {
    var fin = new Array();
    fin[0] = 0;
    fin[1] = 0;
    for (var i = 0; i != 3; i++) {
        /*VÃ©rification des lignes*/
        if (jeu[i * 3] == jeu[i * 3 + 1] && jeu[i * 3] == jeu[i * 3 + 2] && jeu[i * 3] != " ") {
            fin[0] = 1;
            fin[1] = jeu[i * 3];
        }
        /*VÃ©rification des colonnes*/
        if (jeu[i] == jeu[i + 3] && jeu[i] == jeu[i + 6] && jeu[i] != " ") {
            fin[0] = 1;
            fin[1] = jeu[i];
        }
    }
    /*VÃ©rification des diagonales*/
    if (jeu[0] == jeu[4] && jeu[0] == jeu[8] && jeu[0] != " ") {
        fin[0] = 1;
        fin[1] = jeu[0];
    }
    if (jeu[2] == jeu[4] && jeu[2] == jeu[6] && jeu[2] != " ") {
        fin[0] = 1;
        fin[1] = jeu[2];
    }
    /*S'il n'y a pas de gagnant, il vÃ©rifie si la grille est pleine*/
    if (fin[0] == 0) {
        var nbvides = 0;
        for (var w = 0; w != 9; w++)
            if (jeu[w] == " ") nbvides++;
        if (nbvides == 0) fin[0] = 1;
    }
    return fin;
}

function affichegagnant(winner) {
    var phrase;
    if (winner == "Sasuke" || winner == "Naruto") {
        phrase = "Victoire de ";
        if (winner == "Sasuke") {
            phrase += "Sasuke !! ";
            victoire1++;
            document.morpion.joueursuiv.id = "joueurinfo1";
        } else {
            phrase += "Naruto!! ";
            victoire2++;
            document.morpion.joueursuiv.id = "joueurinfo2";
        }
        phrase += "";
    } else {
        phrase = "Personne n\'a gagnÃ©!";
        document.morpion.joueursuiv.id = "rieninfo";
        victoire0++;
    }
    document.morpion.joueursuiv.value = phrase;
    alert(phrase);
    jeufini = 1;
}

function grille() {
    var jeu = new Array();
    jeu[0] = document.morpion.case0.value;
    jeu[1] = document.morpion.case1.value;
    jeu[2] = document.morpion.case2.value;
    jeu[3] = document.morpion.case3.value;
    jeu[4] = document.morpion.case4.value;
    jeu[5] = document.morpion.case5.value;
    jeu[6] = document.morpion.case6.value;
    jeu[7] = document.morpion.case7.value;
    jeu[8] = document.morpion.case8.value;
    return jeu;
}

function affjoueursuiv() {
    document.morpion.joueursuiv.value = "Joueur " + (joueur + 1);
    document.morpion.joueursuiv.id = "joueurinfo" + (joueur + 1);
}

function affvictoires() {
    document.morpionscore.info1.value = victoire1;
    document.morpionscore.info2.value = victoire2;
    document.morpionscore.info3.value = victoire0;
}

function victoirepossible(jeu, lettre) {
    var fin = -1;
    for (var i = 0; i != 3; i++) {

        /*VÃ©rification des lignes*/
        // - Gauche de la ligne
        if (jeu[i * 3] != jeu[i * 3 + 1] && jeu[i * 3 + 1] == jeu[i * 3 + 2] && jeu[i * 3] == " " && jeu[i * 3 + 1] == lettre) fin = i * 3;
        // - Milieu de la ligne
        if (jeu[i * 3] != jeu[i * 3 + 1] && jeu[i * 3] == jeu[i * 3 + 2] && jeu[i * 3 + 1] == " " && jeu[i * 3] == lettre) fin = i * 3 + 1;
        // - Droite de la ligne
        if (jeu[i * 3] == jeu[i * 3 + 1] && jeu[i * 3] != jeu[i * 3 + 2] && jeu[i * 3 + 2] == " " && jeu[i * 3] == lettre) fin = i * 3 + 2;

        /*VÃ©rification des colonnes*/
        // - Haut de la colonne
        if (jeu[i] != jeu[i + 3] && jeu[i + 3] == jeu[i + 6] && jeu[i] == " " && jeu[i + 3] == lettre) fin = i;
        // - Milieu de la colonne
        if (jeu[i] != jeu[i + 3] && jeu[i] == jeu[i + 6] && jeu[i + 3] == " " && jeu[i] == lettre) fin = i + 3;
        // - Bas de la colonne
        if (jeu[i] == jeu[i + 3] && jeu[i] != jeu[i + 6] && jeu[i + 6] == " " && jeu[i] == lettre) fin = i + 6;

    }
    /*VÃ©rification des diagonales*/
    if (jeu[0] != jeu[4] && jeu[4] == jeu[8] && jeu[0] == " " && jeu[4] == lettre) fin = 0;
    if (jeu[0] != jeu[4] && jeu[0] == jeu[8] && jeu[4] == " " && jeu[0] == lettre) fin = 4;
    if (jeu[0] == jeu[4] && jeu[0] != jeu[8] && jeu[8] == " " && jeu[0] == lettre) fin = 8;
    if (jeu[2] != jeu[4] && jeu[4] == jeu[6] && jeu[2] == " " && jeu[4] == lettre) fin = 2;
    if (jeu[2] != jeu[4] && jeu[2] == jeu[6] && jeu[4] == " " && jeu[2] == lettre) fin = 4;
    if (jeu[2] == jeu[4] && jeu[2] != jeu[6] && jeu[6] == " " && jeu[2] == lettre) fin = 6;

    return fin;
}

function technique(jeu) {
    var casejoue = -1;
    if (nbjeucpu == 0) casejoue = 0;
    if (nbjeucpu == 1) {
        if (jeu[2] == "Sasuke" || jeu[4] == "Sasuke" || jeu[6] == "Sasuke") casejoue = 8;
        else {
            if (jeu[4] == " ") {
                casejoue = 4;
                utiltechnique = 1;
            }
        }
    }
    if (nbjeucpu == 2) {
        if (utiltechnique == 1) {
            if (jeu[1] == "Sasuke") casejoue = 6;
            else casejoue = 2;
        }
    }
    return casejoue;
}

function cpuchoix() {
    jeu = grille();
    /*L'ordinateur vÃ©rifie s'il peut gagner Ã  ce tour*/
    var nivdifficulte = document.difficult.niveau.value;
    var casejoue = -1;
    if (nivdifficulte == 4) var optionfacile = Math.round(Math.random() * 1);
    else var optionfacile = 0;
    //Facile, il 1 chance sur 2 de ne pas trouver ses possibilitÃ©s de victoire
    //Autres, il trouve toutes ses possibilitÃ©s de victoire
    if (optionfacile == 0) casejoue = victoirepossible(jeu, 'Naruto');
    /*Plus le niveau de difficultÃ© est important et plus l'ordinateur vÃ©rifie les possibilitÃ©s*/
    //Facile, il vÃ©rifie 2 fois sur 5 les possibilitÃ©s du joueur
    //Moyen, il vÃ©rifie 2 fois sur 3 les possibilitÃ©s du joueur
    //Difficile, il vÃ©rifie toutes les fois les possibilitÃ©s du joueur
    var option2 = Math.round(Math.random() * nivdifficulte);
    /*Si ce n'est pas le cas il vÃ©rifie si le joueur peut gagner*/
    if ((option2 == 0 || option2 == 1) && casejoue == -1) casejoue = victoirepossible(jeu, 'Sasuke');
    if (nivdifficulte == 0 && joueurdebut == 1 && casejoue == -1) casejoue = technique(jeu);
    /*Si personne ne peut gagner il joue dans n'importe quelle case*/
    if (casejoue == -1) {
        for (var i = 0; i != 1;) {
            casejoue = Math.round(Math.random() * 8);
            if (jeu[casejoue] == " ") i = 1;
        }
    }
    return casejoue;
}

function cpu() {
    if (jeufini == 0) {
        casejoue = cpuchoix();
        nbjeucpu++;
        affichechoix(casejoue);
        jeu = grille();
        changejoueur();
        var fin = gagnant(jeu);
        affjoueursuiv();
        if (fin[0] == 1) affichegagnant(fin[1]);
        affvictoires();
    }
}

function jouer(casejoue) {
    if (jeufini == 0) {
        var jeu = grille();
        if (jeu[casejoue] == " ") {
            affichechoix(casejoue);
            jeu = grille();
            changejoueur();
            var fin = gagnant(jeu);
            affjoueursuiv();
            if (fin[0] == 1) affichegagnant(fin[1]);
            affvictoires();
            if (joueur == 1) cpu();
        } else alert("Cette case est dÃ©jÃ  utilisÃ©e!");
    } else alert("Si vous souhaitez refaire un combat,\nveuillez cliquer sur \'RECOMMENCER LE COMBAT\'");
}

function newgame() {
    document.morpion.case0.value = " ";
    document.morpion.case1.value = " ";
    document.morpion.case2.value = " ";
    document.morpion.case3.value = " ";
    document.morpion.case4.value = " ";
    document.morpion.case5.value = " ";
    document.morpion.case6.value = " ";
    document.morpion.case7.value = " ";
    document.morpion.case8.value = " ";
    document.morpion.case0.id = "rien";
    document.morpion.case1.id = "rien";
    document.morpion.case2.id = "rien";
    document.morpion.case3.id = "rien";
    document.morpion.case4.id = "rien";
    document.morpion.case5.id = "rien";
    document.morpion.case6.id = "rien";
    document.morpion.case7.id = "rien";
    document.morpion.case8.id = "rien";
    joueurdebut = joueur;
    nbjeucpu = 0;
    utiltechnique = 0;
    document.morpion.joueursuiv.value = "Joueur " + (joueur + 1);
    document.morpion.joueursuiv.id = "joueurinfo" + (joueur + 1);
    affvictoires();
    jeufini = 0;
    if (joueur == 1) cpu();
}

function bonjour() {
    document.difficult.niveau.value = 2;
    alert("Bienvenue au jeu \"Morpion contre l\'ordinateur\"");
    newgame();
}

function aurevoir() {
    alert("Au revoir et Ã  bientÃ´t\n\nÂ© Nicolas DUBIEN  - 2006");
}
(function() {
    var Player = function(name, className) {
        this.name = name;
        this.className = className;
    };

    function getResult(cell) {
        return cell.children.length === 0 ? -1 : ($(cell).find('div').hasClass(morpion.players[0].className) ? 0 : 1);
    };
    var play = (event) => {
        var element = event.target || event.currentTarget;
        console.info('click sur ', element);
        var className = morpion.players[morpion.currentPlayer].className;
        var symbol = $('<div class="' + className + '"></div>');
        jElement = $(element);
        jElement.append(symbol);
        jElement.unbind('click');
        if (!morpion.gameOver()) {
            //Joueur suivant
            morpion.next();
            morpion.displayCurrentPlayer();
            morpion.append('<h1 style=color:black>Egalité!! </h1>');
            morpion.show();
        } else {
            var winner = morpion.players[morpion.currentPlayer].name;
            console.log('Victoire de %s !', winner);
            $('td').unbind();
            var results = $('#result');
            results.append('<h1 style=color:black>Victoire de ' + winner + '</h1>');
            results.show();
            results.animate({ fontSize: '1.5em' }, "slow");
            results.animate({ fontSize: '1em' }, "slow");
        }

    };
    var displayCurrentPlayerFn = () => {
        //for (var property in morpion) {
        //  var value = morpion[property];
        //};---->
        morpion.players.forEach((player, index) => {
            var span = $('header span.player' + index);
            span.removeClass(player.className);
        });
        var currentPlayer = morpion.players[morpion.currentPlayer];
        $('header span.player' + morpion.currentPlayer).addClass(currentPlayer.className);
    };
    var initFn = function() {
        console.info('initialisation du morpion');
        $('td').click(play);
        morpion.displayCurrentPlayer()
    };
    var gameOverFn = () => {
        var data = [
            [],
            [],
            []
        ];
        $('table tr').each((i, line) => {
            $(line).find('td').each((j, cell) => {
                data[i][j] = getResult(cell);
            });
        });
        var won = false;
        //lignes
        won = won || data[0][0] > -1 && data[0][0] === data[0][1] && data[0][0] === data[0][2];
        won = won || data[1][0] > -1 && data[1][0] === data[1][1] && data[1][0] === data[1][2];
        won = won || data[2][0] > -1 && data[2][0] === data[2][1] && data[2][0] === data[2][2];
        //colones
        won = won || data[0][0] > -1 && data[0][0] === data[1][0] && data[0][0] === data[2][0];
        won = won || data[0][1] > -1 && data[0][1] === data[1][1] && data[0][1] === data[2][1];
        won = won || data[0][2] > -1 && data[0][2] === data[1][2] && data[0][2] === data[2][2];
        //diagonals
        won = won || data[0][0] > -1 && data[0][0] === data[1][1] && data[0][0] === data[2][2];
        won = won || data[0][2] > -1 && data[0][2] === data[1][1] && data[0][2] === data[2][0];

        return won;
    };
    var resetFn = function() {
        morpion.next();
        morpion.init();
        $('td').empty();
        $('table').show();
        $('#result').empty().hide();
    };
    var morpion = {
        players: [
            new Player('Sasuke!!', 'red'),
            new Player('Naruto!!', 'blue')
        ],
        currentPlayer: 0,
        displayCurrentPlayer: displayCurrentPlayerFn,
        init: initFn,
        reset: resetFn,
        gameOver: gameOverFn,
        next: function() {
            morpion.currentPlayer = ++morpion.currentPlayer % morpion.players.length;
        }
    };
    window.morpion = morpion;
    $(document).ready(() => {
        window.morpion.init();
    });
})();