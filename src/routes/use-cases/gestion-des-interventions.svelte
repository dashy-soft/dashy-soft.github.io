<script>
  import imageBacAOIs from "../../assets/use-cases/gestion-des-interventions/bac_a_ois.png";
  import imageEditOI from "../../assets/use-cases/gestion-des-interventions/modal_add_oi.png";
  import imageImportError from "../../assets/use-cases/gestion-des-interventions/import_modal_errors.png";
  import imageImportSuccess from "../../assets/use-cases/gestion-des-interventions/import_modal_success.png";
  import imageUserList from "../../assets/use-cases/gestion-des-interventions/userlist.png";
</script>
<section class="context" id="context">
  <div class="container">
    <h2>
      Gestion des interventions avec Dashy
    </h2>
    <h2 class="light">Contexte</h2>
    <p>
      Une entreprise du domaine de l'énergie réalise de nombreux travaux sur certains sites. Chaque intervention doit être répertoriée, ainsi que de nombreux détails correspondant à chaque tâche.
    </p>
  </div>
</section>
<section class="bac_a_ois" id="bac_a_ois">
  <div class="container">
    <h2 class="light">
      Bacs à ordres d'intervention
    </h2>
    <p>
      Les employés s'occupant de la gestion de travaux remplissent différentes vues en fonction du contrat associé à l'intervention (contrat du prestataire). Les ordres d'intervention ont certains champs similaires, mais aussi des champs spécifiques, en fonction du type d'intervention (robinetterie, calorifuge...).
    </p>
    <span>
      Chaque ordre d'intervention à donc :
      <ul>
        <li>Un numéro d'identifiant (généré par la solution)</li>
        <li>Une description</li>
        <li>Un responsable</li>
        <li>Une date d'exécution</li>
        <li>Un statut</li>
        <li>...</li>
      </ul>
    </span>
    <a href="use-cases/gestion-des-interventions#bac_a_ois_image">
      <img src={imageBacAOIs} alt="bac_a_ois" />
    </a>
    <a href="use-cases/gestion-des-interventions#title" class="lightbox-item" id="bac_a_ois_image">
      <img src={imageBacAOIs} alt="bac_a_ois" />
    </a>
    <p>
      En cliquant sur un ordre d'intervention, un formulaire apparait, permettant de modifier celui-ci.
      Les formulaires sont assez volumineux, étant donné le nombre de champs différents à renseigner sur les enregistrements.<br/>
      Certains champs ont été implémentés spécifiquement pour répondre au besoin. D'autres disposent de règles de validation permettant d'accompagner les utilisateurs dans la modification des données. Par exemple, des règles de validation spécifiques apparaissent lorsque le code de la salle a une certaine valeur.
    </p>
    <a href="use-cases/gestion-des-interventions#ajout_oi">
      <img src={imageEditOI} alt="ajout d'oi" />
    </a>
    <a href="use-cases/gestion-des-interventions#title" class="lightbox-item" id="ajout_oi">
      <img src={imageEditOI} alt="ajout d'oi" />
    </a>
    <p>
      Il est également possible de voir l'historique des modifications d'un enregistrement, pour pouvoir garder une trace du cycle de vie de l'intervention.
    </p>
  </div>
</section>
<section class="bac_a_ois" id="bac_a_ois">
  <div class="container">
    <h2 class="light">
      Import/Export Excel
    </h2>
    <p>
      Cette fonctionnalité est essentielle au client : utilisant de nombreux logiciels pour récupérer des fragments de données, excel est l'outil principal qui permet aux employer de traiter les données en masse, et de faire transiter l'information d'une base à une autre.
    </p>
    <p>
      A tout moment, il est possible d'exporter l'intégralité des données présentes dans une vue au format Excel
    </p>
    <p>
      Les fichiers sont ensuite modifiés par les employés et réimportés dans le logiciel. L'import de données vérifie la cohérence des fichiers importés. Si un utilisateur ou une date est mal écrite dans le tableur, un message d'erreur est affiché, et il est possible d'effectuer la correction.
    </p>
    <div style="display: flex;">
      <div style="width: 50%">
        <a href="use-cases/gestion-des-interventions#import_error_image">
          <img src={imageImportError} alt="import error" style="width: 100%" />
        </a>
        <a href="use-cases/gestion-des-interventions#title" class="lightbox-item" id="import_error_image">
          <img src={imageImportError} alt="import error" />
        </a>
      </div>
      <div style="width: 50%">
        <a href="use-cases/gestion-des-interventions#import_success_image">
          <img src={imageImportSuccess} alt="import success" style="width: 100%" />
        </a>
        <a href="use-cases/gestion-des-interventions#title" class="lightbox-item" id="import_success_image">
          <img src={imageImportSuccess} alt="import success" />
        </a>
      </div>
    </div>
    <p>
      L'import de données prend en charge des tableurs contenant un nombre de ligne assez important.
    </p>
  </div>
</section>
<section class="bac_a_ois" id="bac_a_ois">
  <div class="container">
    <h2 class="light">
      Fiches imprimables
    </h2>
    <p>
      Les intervenants peuvent cliquer à tout moment sur un bouton "impression" depuis un bac à intervention pour imprimer des fiches correspondant aux interventions.
    </p>
  </div>
</section>
<section class="bac_a_ois" id="bac_a_ois">
  <div class="container">
    <h2 class="light">
      Mode hors ligne
    </h2>
    <p>
      Certaines salles des chantiers sont blindées et disposent d'une connectivité réduite. Il est important pour les intervenants de pouvoir tout de même se rendre sur place et modifier les ordres d'intervention.
    </p>
    <p>
      Un add-on spécifique a été développé, leur permettant de mettre dans "leur panier" certains enregistrements, sur leurs tablettes. Une fois l'opération effectuée, ils peuvent se rendre sur place et modifier les enregistrements à leur convenance.
    </p>
    <p>
      Les intervenants peuvent également générer des rapports en PDF et les attacher à une intervention. Ces rapports sont éditables par le client. Il s'agit par exemple de listes de vérifications à faire, avec des cases à cocher "conforme/non conforme".
    </p>
    <p>
      Une fois de retour en salle de pilotage, les tablettes sont synchronisées avec la base de données, et les pièces jointes générées envoyées.
    </p>
  </div>
</section>
<section class="bac_a_ois" id="bac_a_ois">
  <div class="container">
    <h2 class="light">
      Gestion des utilisateurs et droits
    </h2>
    <p>
      Plus de 100 utilisateurs se connectent quotidiennement (nombre en augmentation) pour ajouter/modifier des enregistrements, sur des dizaines de vues différentes.
    </p>
    <p>
      Dans un soucis de sécurité de l'information, mais aussi de concision, il est important de présenter à chaque utilisateur uniquement le périmètre sur lequel il opère. Une gestion des droits avancés a été mise en place, ainsi qu'une vue dédiée à la gestion des matrices de droits utilisateurs.
    </p>
    <a href="use-cases/gestion-des-interventions#userlist_image">
      <img src={imageUserList} alt="matrice utilisateurs" style="width: 100%" />
    </a>
    <a href="use-cases/gestion-des-interventions#title" class="lightbox-item" id="userlist_image">
      <img src={imageUserList} alt="matrice utilisateurs" />
    </a>

  </div>
</section>
<style>
p {
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
