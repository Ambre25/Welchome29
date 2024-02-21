const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

// Configuration du transporteur de messagerie (exemple avec Gmail)
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.pass,
  },
});

exports.newOrderTrigger = functions.firestore
  .document('Order/{orderId}')
  .onCreate(async (snap, context) => {
    const newValue = snap.data();

    // Récupération des données de la commande
    const deliveryAddress = newValue.deliveryAddress;
    const phone = newValue.phone;
    const city = newValue.city;
    const user = newValue.user;
    // etc.

    // Récupération des articles de la commande
    const itemsRef = admin.firestore().collection(`Order/${context.params.orderId}/items`);
    const itemsSnap = await itemsRef.get();

    let items = [];
    itemsSnap.forEach(item => {
      let itemData = item.data();
      if (itemData.date) {
        itemData.date = itemData.date.toDate();
      }
      if (itemData.time) {
        itemData.time = itemData.time.toDate();
      }
      if (itemData.date_visite) {
        itemData.date_visite = itemData.date_visite.toDate();
      }
      if (itemData.departureTime) {
        itemData.departureTime = itemData.departureTime.toDate();
      }
      if (itemData.returnTime) {
        itemData.returnTime = itemData.returnTime.toDate();
      }
      if (itemData.date_peche) {
        itemData.date_peche = itemData.date_peche.toDate();
      }
      if (itemData.date_bienetre) {
        itemData.date_bienetre = itemData.date_bienetre.toDate();
      }
      if (itemData.time_bienetre) {
        itemData.time_bienetre = itemData.time_bienetre.toDate();
      }
      if (itemData.departureDateTime) {
        itemData.departureDateTime = itemData.departureDateTime.toDate();
      }
      if (itemData.returnDateTime) {
        itemData.returnDateTime = itemData.returnDateTime.toDate();
      }
      if (itemData.date_traiteur) {
        itemData.date_traiteur = itemData.date_traiteur.toDate();
      }
      if (itemData.heure_traiteur) {
        itemData.heure_traiteur = itemData.heure_traiteur.toDate();
      }

      let formattedDate = itemData.date ? itemData.date.toLocaleDateString() : '';
      let formattedTime = itemData.time ? itemData.time.toLocaleTimeString() : '';
      let formattedDateVisite = itemData.date_visite ? itemData.date_visite.toLocaleDateString() : '';
      let formattedDepartureTime = itemData.departureTime ? itemData.departureTime.toLocaleTimeString() : '';
      let formattedReturnTime = itemData.returnTime ? itemData.returnTime.toLocaleTimeString() : '';
      let formattedDatePeche = itemData.datePeche ? itemData.datePeche.toLocaleDateString() : '';
      let formattedDateBienetre = itemData.date_bienetre ? itemData.date_bienetre.toLocaleDateString() : '';
      let formattedTimeBienetre = itemData.time_bienetre ? itemData.time_bienetre.toLocaleTimeString() : '';
      let formattedDepartureDateTime = itemData.departureDateTime ? itemData.departureDateTime.toLocaleString() : '';
      let formattedReturnDateTime = itemData.returnDateTime ? itemData.returnDateTime.toLocaleString() : '';
      let formattedDateTraiteur = itemData.date_traiteur ? itemData.date_traiteur.toLocaleDateString() : '';
      let formattedHeureTraiteur = itemData.heure_traiteur ? itemData.heure_traiteur.toLocaleTimeString() : '';

      items.push({
        ...itemData,
        date: formattedDate,
        time: formattedTime,
        date_visite: formattedDateVisite,
        departureTime: formattedDepartureTime,
        returnTime: formattedReturnTime,
        date_peche: formattedDatePeche,
        date_bienetre: formattedDateBienetre,
        time_bienetre: formattedTimeBienetre,
        date_time_velo_aller: formattedDepartureDateTime,
        date_time_retour_velo: formattedReturnDateTime,
        date_traiteur: formattedDateTraiteur,
        heure_traiteur: formattedHeureTraiteur,
      });
    });

    // Création du contenu de l'e-mail
    let emailText = `Nouvelle commande ${user} :\n\nAdresse de livraison: ${deliveryAddress}\nTéléphone: ${phone}\nVille: ${city}\n\nArticles:\n\n`;

    items.forEach(item => {
      emailText += `  - ${item.name}: ${item.quantity} pièce(s) (Total: ${item.totalPrice})\n\n`;
      if(item.duration) {
        emailText += `   Durée: ${item.duration}\n\n`;
      }
      if(item.time) {
        emailText += `   Heure: ${item.time}\n\n`;
      }
      if(item.date) {
        emailText += `   Date: ${item.date}\n\n`;
      }
      if(item.date_visite) {
        emailText += `   Date visite: ${item.date_visite}\n\n`;
      }
      if(item.departureTime) {
        emailText += `   Heure de départ: ${item.departureTime}\n\n`;
      }
      if(item.returnTime) {
        emailText += `   Heure de retour: ${item.returnTime}\n\n`;
      }
      if(item.adults) {
        emailText += `   Adultes: ${item.adults}\n\n`;
      }
      if(item.children) {
        emailText += `   Enfants: ${item.children}\n\n`;
      }
      if(item.babies) {
        emailText += `   Bébés: ${item.babies}\n\n`;
      }
      if(item.date_peche) {
        emailText += `   Date peche: ${item.date_peche}\n\n`;
      }
      if(item.date_bienetre) {
        emailText += `   Date bien etre: ${item.date_bienetre}\n\n`;
      }
      if(item.time_bienetre) {
        emailText += `   Heure bien etre: ${item.time_bienetre}\n\n`;
      }
      if(item.date_time_velo_aller) {
        emailText += `   Aller: ${item.date_time_velo_aller}\n\n`;
      }
      if(item.date_time_retour_velo) {
        emailText += `   Retour: ${item.date_time_retour_velo}\n\n`;
      }
      if(item.velo_adulte) {
        emailText += `   Velos adultes: ${item.velo_adulte}\n\n`;
      }
      if(item.velo_enfant) {
        emailText += `   Velos adultes: ${item.velo_enfant}\n\n`;
      }
      if(item.velo_electrique) {
        emailText += `   Velos elec: ${item.velo_electrique}\n\n`;
      }
      if(item.date_traiteur) {
        emailText += `   Date Traiteur: ${item.date_traiteur}\n\n`;
      }
      if(item.heure_traiteur) {
        emailText += `   Heure Traiteur: ${item.heure_traiteur}\n\n`;
      }
      if(item.nb_croissant) {
        emailText += `   Croissants: ${item.nb_croissant}\n\n`;
      }
      if(item.nb_pain_choc) {
        emailText += `   Pains au chocolat: ${item.nb_pain_choc}\n\n`;
      }
      if(item.nb_confiture) {
        emailText += `   Confiture: ${item.nb_confiture}\n\n`;
      }
      if(item.nb_nutella) {
        emailText += `   Nutella: ${item.nb_nutella}\n\n`;
      }
      if(item.nb_baguette) {
        emailText += `   Baguette: ${item.nb_baguette}\n\n`;
      }
      if(item.nb_cereales) {
        emailText += `   Baguette Céréales: ${item.nb_cereales}\n\n`;
      }
      if(item.nb_tradition) {
        emailText += `   Baguette Tradition: ${item.nb_tradition}\n\n`;
      }
    });

    // Options pour l'e-mail
    let mailOptions = {
      from: 'welcomm.info29@gmail.com',
      to: 'contact.welchome29@gmail.com', // E-mail du destinataire
      subject: 'Nouvelle commande',
      text: emailText,
    };

    // Envoi de l'e-mail
    try {
      await transporter.sendMail(mailOptions);
      console.log('E-mail envoyé avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    }
  });

  exports.sendEmailOnNewMessage = functions.firestore
    .document('messages/{messageId}')
    .onCreate(async (snapshot, context) => {
        const messageData = snapshot.data();

        // Récupération des informations du message
        const name = messageData.name;
        const email = messageData.email;
        const message = messageData.message;

        // Options pour l'envoi de l'email
        const mailOptions = {
            from: 'welcomm.info29@gmail.com',
            to: 'contact.welchome29@gmail.com', // Adresse email de destination
            subject: 'Nouveau message de contact',
            text: `Nom: ${name}\nEmail: ${email}\n\nMessage: ${message}`
        };

        try {
            // Envoi de l'email
            await transporter.sendMail(mailOptions);
            console.log('Email envoyé avec succès');
            return null;
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email', error);
            return null;
        }
    });

  exports.onNewDevis = functions.firestore
    .document("Devis/{devisId}")
    .onCreate((snapshot, context) => {
      const newDevis = snapshot.data();

      const emailContent = `
      Nom: ${newDevis.nom}\n
      Ville: ${newDevis.ville}\n
      Téléphone: ${newDevis.telephone}\n
      Mail: ${newDevis.mail}\n
      Airbnb: ${newDevis.airbnb}\n
      Formule: ${newDevis.formule_menage}\n
      Surface du bien: ${newDevis.surface}\n
      Nombre de SDB: ${newDevis.sdb}\n
      Nombre de WC: ${newDevis.wc}\n
      Gestion du linge: ${newDevis.gestion_linge}\n
      Recontacter le client: ${newDevis.recontact}\n
      Quand : ${newDevis.recontact_moment}
    `;

    const mailOptions = {
      from: "welcomm.info29@gmail.com",
      to: "contact.welchome29@gmail.com", // L'adresse e-mail du destinataire
      subject: "Nouveau Devis",
      text: emailContent,
    };

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Erreur lors de l'envoi de l'e-mail: ", error);
        return false;
      }
      console.log("E-mail envoyé avec succès: ", info.response);
      return true;
    });
  });