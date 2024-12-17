// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

START

FUNCTION SplitTheNote

    INPUT summa
    INPUT antalVänner
    INPUT dricksDecimal

    dricks = summa * dricksDecimal
    totalSumma = summa + dricks

    beloppPerPerson = totalSumma / antalVänner

    OUTPUT "Varje person ska betala:" + beloppPerPerson

END FUNCTION

CALL SplitTheNote

END

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

START

CALL play();

FUNCTION play()
    SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutordOrd till "FIVE";

    OUTPUT "Startord:" startOrd
    OUTPUT "Slutord:" slutOrd

    SET nuvarandeOrd = startOrd

    WHILE nuvarandeOrd != slutord
        OUTPUT "Ange ett nytt ord:"
        INPUT nyttOrd

        SET godkänt = TRUE
        
        IF isOneLetterApart (nuvarandeOrd, nyttOrd) == TRUE
            IF nyttOrd IN ordbok
                OUTPUT nyttOrd + "Godkänt"
                SET nuvarandeOrd = nyttOrd
            ELSE
                OUTPUT nyttOrd + "finns inte i ordboken"
                SET godkänt = FALSE
            END IF

        ELSE
            OUTPUT "Fel! Ordet måste vara exakt en bokstav ifrån" + nuvarandeOrd
            SET godkänt = FALSE
        END IF
        
        IF nyttOrd == slutOrd AND godkänt = TRUE
            OUTPUT "I Mål! Du klara det!"
            BREAK
        END IF

    END WHILE

END FUNCTION


FUNCTION isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;

    IF LENGHT(wordOne) != LENGHT(wordTwo)
        RETURN FALSE
    
    FOR i FROM 0 TO LENGHT(wordOne) - 1
        IF wordOne[i] != wordTwo[i]
            diffCount = diffCount + 1
        END IF
    END FOR

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
    
END FUNCTION

END

*/