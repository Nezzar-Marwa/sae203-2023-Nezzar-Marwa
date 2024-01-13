<script setup lang="ts">
	import FacebookIcon from '@/components/icons/IconFacebook.vue'
	import TwitterIcon from '@/components/icons/IconTwitter.vue'
	import InstagramIcon from '@/components/icons/IconInstagram.vue'

</script>

<template>
    <footer class="grille space-y-6 bg-noirfooter py-5 px-6 text-backgroundcolor">
      <div class="col-span-2 col-start-1 lg:mt-7 space-y-3 pb-4">
        <h4 class="h4 font-bold uppercase">Contact</h4>
        <address>
          4 place Tharradin<br />25200 Montbéliard<br />
          <a class="h4" href="mailto:conservatoire@agglo-belfort.fr">ProjetOrient@support.fr</a>
        </address>
        <ul class="flex gap-4">
          <li>
            <a href="https://facebook.com" aria-label="facebook"><FacebookIcon /> </a>
          </li>
          <li>
            <a href="https://instagram.com" aria-label="instagram"><InstagramIcon /> </a>
          </li>
          <li>
            <a href="https://twitter.com" aria-label="twitter"><TwitterIcon /> </a>
          </li>
        </ul>
      </div>


      <div></div>

      <nav class=" col-span-2 col-start-5 space-y-3">
        <ul>
          <h4 class="h4 font-bold uppercase mb-3">Projet Orient</h4>
          <li><RouterLink to="/infos_pratiques">Informations pratiques</RouterLink></li>
          <li><RouterLink to="/oeuvres">Les oeuvres</RouterLink></li>
          <li><RouterLink to="/">Les artistes</RouterLink></li>
          <li class=" lg:hidden"><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </nav>

 <section class=" col-span-4 col-start-8 hidden lg:block space-y-3">
      <h4 class="mb-8 h4 text-center">Une remarque ? une suggestion ? un commentaire ? N’hésitez pas à nous en faire part.
          Car pour nous votre avis compte</h4>
      <form action="#">
      <div>
        <label for="Mail*">Mail<span class="text-rouge">*</span></label>
        <input class="flex rounded-lg text-noir border mb-4 px-12 py-1  border-articles  invalid:border-rouge invalid:text-rouge focus:outline-none focus:ring-1 focus:ring-articles focus:invalid:border-rouge focus:invalid:ring-rouge lg:px-24 " type="email" placeholder="VotreEmail@gmail.com" name="Mail">
      </div>
      <div>
        <label for="message*">Message<span class="text-rouge">*</span></label>
        <textarea class="flex rounded-lg text-backgroundcolor border mb-4 px-16 py-1  border-articles focus:outline-none focus:ring-1 focus:ring-articles lg:px-28"  id="msg" name="message" rows="5"></textarea>
      </div>
      <div>
      <button class="rounded-lg border border-articles px-8 py-2 font-bold text-backgroundcolor hover:bg-articles"  type="submit">Envoyer</button>
    </div>
    </form>
    </section>
    </footer>
  </template>