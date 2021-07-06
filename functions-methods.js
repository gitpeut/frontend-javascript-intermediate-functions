// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain( emailaddress ){
    console.log( 'email addres ' + emailaddress );

    if ( emailaddress.split('@')[0] === emailaddress ){
        console.log( 'Invalid');
        return('');
    }

    return( emailaddress.split('@')[1]);

}

console.log ('Domain '+ getEmailDomain("aap") );// geeft novi-education.nl

console.log ('Domain '+ getEmailDomain("n.eeken@novi-education.nl") );// geeft novi-education.nl
console.log( 'Domain '+ getEmailDomain("t.mellink@novi.nl") );// geeft novi.nl
console.log( 'Domain '+ getEmailDomain("a.wiersma@outlook.com") );// geeft outlook.com

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail( emailaddress ){
    console.log( 'email addres ' + emailaddress );
    let domain = getEmailDomain( emailaddress );
    let domainType = 'Extern';

    switch ( domain ){
        case 'novi.nl':
            domainType = 'Medewerker';
            break;
        case 'novi-education.nl':
            domainType = 'Medewerker';
            break;
        default:
            break;
    }

    return( domainType );

}

console.log( typeOfEmail("n.eeken@novi-education.nl") );
//geeft "Student"
console.log( typeOfEmail("t.mellink@novi.nl") );
//geeft geeft "Medewerker"
console.log( typeOfEmail("novi.nlaapjesk@outlook.com") );
// geeft geeft "Extern" <-- deze moet het ook doen!
console.log( typeOfEmail("a.wiersma@outlook.com") );
// geeft "Extern"

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity( emailaddress ){
    //console.log( 'email address ' + emailaddress );

    if ( !emailaddress.includes('@') ){
       //console.log( 'Invalid, no @');
        return( false );
    }

    if ( emailaddress.indexOf(',') !==  -1 ){
        //console.log( 'Invalid, contains comma');
        return( false );
    }

    if ( emailaddress.endsWith('.')  ){
        //console.log( 'Invalid, end with .');
        return( false );
    }

    return ( true );

}

console.log(  checkEmailValidity("n.eeken@novi.nl") );// geeft true - want @ en punt op de juiste plek
console.log( checkEmailValidity("tessmellink@novi.nl"));// geeft true - want @ en punt op de juiste plek
console.log( checkEmailValidity("n.eekenanovi.nl"));// geeft false - want geen @
console.log( checkEmailValidity("n.eeken@novinl."));// geeft false - want de punt mag niet als laatst
console.log( checkEmailValidity("tessmellink@novi,nl"));// geeft false - want er staat een komma in

