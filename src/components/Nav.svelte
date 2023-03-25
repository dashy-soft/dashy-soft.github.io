<script>
	export let segment;
</script>

<header>
  <div class="container">
    <h1>
      <a class="title-link" href="/" id="title">
        Dashy
        <span>Collaboration made easy.</span>
      </a>
    </h1>
    <a class="burger-menu" href="#menu">
      <span class="burger-icon">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </a>
    <nav id="menu">
      <span class="links bold">
        <a class="menu-close" href="#title">
          <span>
            <span>
              <span class="bar1"></span>
              <span class="bar2"></span>
            </span>
          </span>
        </a>
        <a href="#product">Présentation</a>
        <a href="#use-cases">Cas d'usages</a>
        <a href="#features">Fonctionnalités</a>
        <a href="#contact" class="button">
          Contactez nous
        </a>
      </span>
    </nav>
  </div>
</header>

<!--
<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>

		</!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen --/>
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
	</ul>
</nav>
-->
