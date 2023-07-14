#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
echo NB: assicurarsi di essere nella cartella padre di tutte le parti del progetto.
echo Avvio single-spa 

#assegnare alle variabili il nome della cartella e il nome del progetto della root

cartellaRoot="root-spa"

#comando per l'apertura di un nuovo terminale e per il comando del progetto Root
cd ${cartellaRoot}
konsole --noclose -e "npm run start" &
cd -

#assegnare alle variabili il nome della cartella e il nome del progetto

# progetto 0
cartellaPr0='nav-bar'
nomePr0='nav-bar'

# progetto 1

cartellaPr1='material-test'
nomePr1='material-test'

# progetto 2
cartellaPr2='material-test2'
nomePr2='material-test2'

# progetto 3
cartellaPr3='vue-material'
nomePr3='vue-material'


#-------------------PROGETTO 0  NAV BAR -------------------------

#comando per l'apertura di un nuovo terminale e per il comando del progetto 0

cd ${cartellaPr0}
konsole --noclose -e "npm run serve:single-spa:${nomePr0}" &
cd -

#-------------------PROGETTO 1  -------------------------

#comando per l'apertura di un nuovo terminale e per il comando del progetto 1

cd ${cartellaPr1}
konsole --noclose -e "npm run serve:single-spa:${nomePr1}" &
cd -

#-------------------PROGETTO 2 -------------------------

#comando per l'apertura di un nuovo terminale e per il comando del progetto 2

cd ${cartellaPr2}
konsole --noclose -e "npm run serve:single-spa:${nomePr2}" &
cd -

#-------------------PROGETTO 3 -------------------------

#comando per l'apertura di un nuovo terminale e per il comando del progetto 3

cd ${cartellaPr3}
konsole --noclose -e "npm run serve" &
cd -









