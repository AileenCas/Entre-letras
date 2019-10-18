import libFirestore from './libFirestore'
import firebase from "firebase";
let db = libFirestore.collection("usuarios");

function calculo(puntos, email, exp, nivel) {
    if (puntos >= 8 && puntos <= 10){
        db.doc(email).update({
            exp: 15 + Number.parseInt(exp)
        })
    }else if (puntos >= 5 && puntos <= 7){
        db.doc(email).update({
            exp: 10 + Number.parseInt(exp)
        })
    }else if (puntos >= 2 && puntos <= 4){
        db.doc(email).update({
            exp: 5 + Number.parseInt(exp)
        })
    }
    db.doc(firebase.auth().currentUser.email).get().then(doc =>{
        exp = doc.data().exp;
    });
    if (exp >= 100){
        db.doc(email).update({
            nivel: nivel+1,
            exp: 0
        });
    }
}

export default calculo;