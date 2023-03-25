<script>
  import imageVueKanbanMagasin from "../../assets/use-cases/okr/kanban_magasin.png";
  import imageCreationKanban1 from "../../assets/use-cases/okr/creation_kanban_1.png";
  import imageCreationKanban2 from "../../assets/use-cases/okr/creation_kanban_2.png";
</script>
<section class="context" id="context">
  <div class="container">
    <h2>
      Gestion de projet avec Dashy
    </h2>
    <h2 class="light">Contexte</h2>
    <p>
      Une grande chaine de magasin veut évaluer le positionnement de ses magasins sur différents objectifs. Chaque magasin doit se positionner sur certains objectifs proposés par le siège, effectuer des actions de son choix correspondant à ces objectifs, puis effectuer des relevés d'actions. 
    </p>
    <p>
      Suite à cela, des employés du siège social inspectent les données et agissent en fonction. Ils peuvent apporter de l'aide au magasin dans ses démarches, et ils peuvent plus facilement voir quels peuvent être les difficultés de chaque magasin.
    </p>
    <p>
      Dans cet exemple, une notion particulière est apportée : Les magasins eux-mêmes doivent pouvoir inspecter les données nationales. Ainsi, ils peuvent voir les actions qui sont menées dans leur région, et ainsi se regrouper pour des actions plus pertinentes.
    </p>
  </div>
</section>
<section class="bac_a_ois" id="bac_a_ois">
  <div class="container">
    <h2 class="light">
      Méthode OKR
    </h2>
    <p>
    </p>
  </div>
  <div class="container">
    <h2 class="light">
      Kanbans à deux dimensions
    </h2>
    <p>
      Ce type de kanban permet de trier les éléments par colonne et par ligne, chaque élément placé dans une ligne ayant pour élément parent l'élément de la première colonne de cette ligne.
    </p>
    <p>
      <a href="use-cases/gestion-de-projet#kanban_magasin_image">
        <img src={imageVueKanbanMagasin} alt="kanban_magasin" style="width: 400px"/>
      </a>
      <a href="use-cases/gestion-de-projet#title" class="lightbox-item" id="kanban_magasin_image">
        <img src={imageVueKanbanMagasin} alt="kanban_magasin" />
      </a>
    </p>
  </div>
  <div class="container">
    <h2 class="light">
      Création de kanbans à la volée
    </h2>
    <p>
      L'application déployée chez le client comprend un kanban par magasin. Le client a donc besoin d'ajouter très facilement de nouveaux kanbans lors de la création d'un nouveau magasin. Pour ce faire, un système d'assistant de création configurable permet de créer des vues préconfigurées, qui varient en fonction des quelques champs que l'on fait apparaitre lors de la création.
    </p>
    <p>
      Le client n'a ainsi plus à perdre du temps à reconfigurer une vue de zéro, et n'a plus qu'a sélectionner un magasin dans la liste qui lui est présentée!
    </p>
    <p>
      <a href="use-cases/gestion-de-projet#creation_kanban_1">
        <img src={imageCreationKanban1} alt="creation_kanban_1" style="width: 400px"/>
      </a>
      <a href="use-cases/gestion-de-projet#title" class="lightbox-item" id="creation_kanban_1">
        <img src={imageCreationKanban1} alt="creation_kanban_1" />
      </a>
      <a href="use-cases/gestion-de-projet#creation_kanban_2">
        <img src={imageCreationKanban2} alt="creation_kanban_2" style="width: 400px"/>
      </a>
      <a href="use-cases/gestion-de-projet#title" class="lightbox-item" id="creation_kanban_2">
        <img src={imageCreationKanban2} alt="creation_kanban_2" />
      </a>
    </p>
  </div>
  <div class="container">
    <h2 class="light">
      Exploitation des données
    </h2>
    <p>
    </p>
  </div>

</section>
<style>
p {
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
