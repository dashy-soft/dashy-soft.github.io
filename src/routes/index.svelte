<script>
  import imageProduit_factures from "../assets/produit_factures.png";
  import imageProduit_forms from "../assets/produit_forms.png";
  import imageProduit_kanban from "../assets/produit_kanban.png";
  import imageProduit_gantt from "../assets/produit_gantt.png";
  import imageSupport from "../assets/support.svg";
  import imageTeams from "../assets/teams.svg";
  import imageSearch from "../assets/search.svg";
  import imageFiles from "../assets/files.svg";
  import imageImportExport from "../assets/import-export.svg";
  import imageAddons from "../assets/addons.svg";
  import imageNotification from "../assets/notification.svg";
  import imagePlatform from "../assets/platform.svg";
</script>
<section class="product" id="product">
  <div class="container">
    <h2 class="light">
      Des vues pour valoriser vos données d'entreprise
    </h2>
    <span class="subtitle light">
      Construisez, collaborez, gérez vos projets et boostez votre productivité. Parce que chaque business est géré de manière unique, Dashy est conçu pour s'adapter et couvrir tous vos besoins.
    </span>
    <div class="card">
      <div>
        <h3>
          Editez vos données d'entreprise
        </h3>
        <p>
          Fini les partages de fichiers excel par e-mail, les CRM qui ne répondent pas à vos besoins. Des formulaires personnalisés répondent à vos besoins. Et si ce n'est pas le cas, il est possible d'en ajouter des nouveaux. Les possibilités sont infinies, et le logiciel vous permet de gérer d'important volumes de données simplement.
          <br/>
          Les données sont validées par le logiciel avant chaque enregistrement, ce qui évite des incohérences sur le long terme
        </p>
      </div>
      <a href="#produit_factures">
        <img src={imageProduit_factures} alt="factures" />
      </a>
      <a href="#title" class="lightbox-item" id="produit_factures">
        <img src={imageProduit_factures} alt="factures" />
      </a>
    </div>
    <div class="card">
      <div>
        <h3>
          Construisez des vues et formulaires visuellement
        </h3>
        <p>
          Parce que ce n'est pas à vous de vous adapter
          <br/>
          Vous pouvez à tout moment ajouter des champs dans les formulaires, modifier la façon dont les éléments sont affichés sur les listes, kanbans, calendriers...
        </p>
      </div>
      <a href="#produit_forms">
        <img src={imageProduit_forms} alt="formulaires" />
      </a>
      <a href="#title" class="lightbox-item" id="produit_forms">
        <img src={imageProduit_forms} alt="formulaires" />
      </a>
    </div>
    <div class="card">
      <div>
        <h3>
          Collaborez avec toutes vos équipes
        </h3>
        <p>
          Conçu depuis le début pour coordonner vos équipes.
          <br/>
          Dashy dispose d'un éditeur de droits avancés permettant de défini de manière très précise qui a accès à vos vues et données. Vous pouvez voir qui est en train d'afficher une vue ou d'éditer un document en temps réel.
        </p>
      </div>
      <a href="#produit_kanban">
        <img src={imageProduit_kanban} alt="kanban" />
      </a>
      <a href="#title" class="lightbox-item" id="produit_kanban">
        <img src={imageProduit_kanban} alt="kanban" />
      </a>
    </div>
    <div class="card">
      <div>
        <h3>
          Vues Liste, Kanban, Calendrier, Gantt...
        </h3>
        <p>
          Différents modes d'affichages pour valoriser vos données
          <br/>
          Selon que vous gériez des rendez-vous, des comptes-rendus, des ordres de travaux, des personnes... Il est important que l'interface s'adapte à vos besoins. Différents modes de présentation des données sont disponibles.
          <br/>
          Et si aucun ne vous satisfait, créons-en un ensemble!
        </p>
      </div>
      <a href="#produit_gantt">
        <img src={imageProduit_gantt} alt="gantt" />
      </a>
      <a href="#title" class="lightbox-item" id="produit_gantt">
        <img src={imageProduit_gantt} alt="gantt" />
      </a>
    </div>
  </div>
</section>
<section class="use-cases" id="use-cases">
  <div class="container">
    <h2 class="centered">
      Concu pour s'adapter à vos équipes
    </h2>
    <span class="subtitle centered">
      Voici quelques exemples vous permettant de voir comment Dashy peut s'adapter à vos besoins
    </span>
    <div class="card-list">
      <a href="use-cases/gestion-des-interventions" class="card">
        <h3>Suivi de travaux</h3>
        <ul>
          <li>Gestion des interventions</li>
          <li>Edition de procès verbaux</li>
          <li>Mode hors ligne</li>
        </ul>
        <span class="see-more-button">
          En savoir plus...
        </span>
      </a>
      <div class="card">
        <h3>CRM</h3>
        <ul>
          <li>Gestion des contacts</li>
          <li>Calendrier</li>
          <li>Inventaires</li>
        </ul>
      </div>
      <div class="card">
        <h3>Ressources humaines</h3>
        <ul>
          <li>Gestion des équipes</li>
          <li>Process de recrutement</li>
          <li>Gestion du temps</li>
        </ul>
      </div>
      <a href="use-cases/sales" class="card">
        <h3>Ventes</h3>
        <ul>
          <li>Listing des prospects</li>
          <li>Suivi commercial</li>
          <li>Facturation</li>
        </ul>
        <span class="see-more-button">
          En savoir plus...
        </span>
      </a>
      <a href="use-cases/gestion-de-projet" class="card">
        <h3>Gestion de projet</h3>
        <ul>
          <li>Méthode OKR</li>
          <li>Création de kanbans à la volée</li>
          <li>Exploitation des données</li>
        </ul>
        <span class="see-more-button">
          En savoir plus...
        </span>
      </a>
      <div class="card">
        <h3>Product management</h3>
        <ul>
          <li>Kanban</li>
          <li>Base de connaissance</li>
          <li>Gestion des tickets et incidents</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section class="features centered" id="features">
  <div class="container">
    <h2>Fonctionnalités</h2>
    <span class="subtitle">Toutes les fonctionnalités pour booster votre productivité</span>
    <div class="card-list">
      <div class="card">
        <img src={imageSupport} alt="support" />
        <h3 class="bold">Support</h3>
        <span class="subtitle">
          Nous restons à votre écoute!
        </span>
        <p>
          Une équipe est disponible pour répondre à vos questions, vous aider à tout moment.<br/>
          Nous proposons également des formations pour vous aider à manipuler l'outil.
        </p>
      </div>
      <div class="card">
        <img src={imageTeams} alt="teams" />
        <h3 class="bold">GESTION D'EQUIPES</h3>
        <span class="subtitle">
          Une gestion des accès fine pour collaborer en toute sérénité
        </span>
        <p>
          Un système de gestion des droits avancé vous permet d'organiser finement l'accès aux vues et aux données, pour que chaque collaborateur ne puisse accéder qu'aux problématiques qu'il traite.
        </p>
      </div>
      <div class="card">
        <img src={imageSearch} alt="search" />
        <h3 class="bold">RECHERCHE</h3>
        <span class="subtitle">
          Recherche texte simple ou requêtage avancé
        </span>
        <p>
          Retrouvez vos données à l'aide d'options de recherches simples. Pour aller plus loin, un langage de requêtage complexe vous permet de définir des filtres avancés
        </p>
      </div>
      <div class="card">
        <img src={imageFiles} alt="files" />
        <h3 class="bold">GESTION DE FICHIERS</h3>
        <span class="subtitle">
          Une gestion simple et sans accroc!
        </span>
        <p>
          Le logiciel permet de manipuler l'envoi et la sauvegarde de plusieurs centaines de Go sans problèmes!
        </p>
      </div>
      <div class="card">
        <img src={imageImportExport} alt="import-export" />
        <h3 class="bold">IMPORT/EXPORT</h3>
        <span class="subtitle">
          Vous n'êtes pas esclaves de la solution!
        </span>
        <p>
          Importez et exportez vos données au format JSON ou Excel. A l'import, une vérification des champs vous permet d'améliorer la cohérence globale de votre base de données.
        </p>
      </div>
      <div class="card">
        <img src={imageAddons} alt="addons" />
        <h3 class="bold">ADDONS</h3>
        <span class="subtitle">
          Développement personnalisé pour vos besoins
        </span>
        <p>
          Les fonctionnalités existantes ne suffisent pas? Nous sommes à votre écoute pour développer de nouvelles fonctionnalités. Et si vous souhaitez que les nouveaux développements ne soient accessibles qu'a votre entreprise, pas de problèmes!
        </p>
      </div>
      <div class="card">
        <img src={imageNotification} alt="notification" />
        <h3 class="bold">NOTIFICATIONS</h3>
        <span class="subtitle">
          On vous avertit!
        </span>
        <p>
          Il est possible de configurer la solution pour vous avertir par e-mail, (vous ou vos équipes) quand des données ont été modifiées.
        </p>
      </div>
      <div class="card">
        <img src={imagePlatform} alt="platform" />
        <h3 class="bold">CHOIX DE LA PLATEFORME</h3>
        <span class="subtitle">
          Hébergé, ou chez vous?
        </span>
        <p>
          Nous nous adaptons à vos besoins et à vos préférences et adoptons le mode d'installation que vous préférez!
        </p>
      </div>
    </div>
  </div>
</section>
<section class="evolution centered">
  <div class="container">
    <h2 class="light">Nous sommes en constante évolution</h2>
    <p class="light">
      Le logiciel est constamment en phase de développement. Nous restons guidés par les demandes et besoins de nos clients afin de rendre la solution plus attractive.
    </p>
    <p class="bold">
      De nombreuses fonctionnalités sont en cours de développement et vont faire leur apparition prochainement (Édition de rapports, Wiki, et bien d'autres...)
    </p>
  </div>
</section>
<section class="contact centered" id="contact">
  <div class="container">
    <iframe title="Contact form" src="https://docs.google.com/forms/d/e/1FAIpQLSc86EtrE0F2ihtjV798kipe9H_i9TXQCJktheG5sMH1pGSTmg/viewform?embedded=true" height="900" frameborder="0" marginheight="0" marginwidth="0" style="width: 100%">Loading…</iframe>
  </div>
</section>
<footer>
  <div class="container">
    <nav>
      <div class="card">
        <h3>Ressources</h3>
        <ul>
          <li>
            <a href="https://dashy-demo.netlify.app/" target="_blank">Démonstration</a>
            <div>
              Compte utilisateur simple<br/>
              <u>username</u>: demo<br/>
              <u>mot de passe</u>: demo
            </div>
          </li>
        </ul>
      </div>
      <div class="card">
        <h3>Contact</h3>
        <ul>
          <li>
            info@dashy-soft.com
          </li>
        </ul>
    </nav>
  </div>
</footer>
<style>
a.card {
  text-decoration: none;
  color: black;
}
a.card:hover {
  background: #00000020;
}
a.card:hover .see-more-button {
  text-decoration: underline;
}
.see-more-button {
  float: right;
}
</style>
