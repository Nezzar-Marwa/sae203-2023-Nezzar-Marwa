<template>

      <h4 class="h3 mt-10 font-medium text-center ">Une remarque ? une suggestion ? un commentaire ? N’hésitez pas à nous en faire part.
              Car pour nous votre avis compte</h4>
   <section class=" flex item-center justify-center  py-10 col-span-4 col-start-8  space-y-3">
      <form class="border-2 border-noir px-6 py-12 lg:px-16" action="#">

    <div>
        <label for="Nom*">Nom<span class="text-rouge">*</span></label>
        <input class="h4 flex rounded-lg text-noir border mb-4 px-12 py-1  border-noirfooter focus:outline-indigo focus:ring-1 focus:ring-articles lg:px-24  " type="text" name="Nom" id="Nom">
      </div>
      <div>
        <label for="Nom*">Prénom<span class="text-rouge">*</span></label>
        <input class="h4 flex rounded-lg text-noir border mb-4 px-12 py-1  border-noirfooter focus:outline-indigo focus:ring-1 focus:ring-articles lg:px-24  " type="text" name="Nom" id="Nom">
      </div>
    <div>
        <label for="Mail*">Mail<span class="text-rouge">*</span></label>
        <input class="h4 flex rounded-lg text-noir border mb-4 px-12 py-1  border-noirfooter  invalid:border-rouge invalid:text-rouge focus:outline-none focus:ring-1 focus:ring-indigo focus:invalid:border-rouge focus:invalid:ring-rouge lg:px-24 " type="email" placeholder="VotreEmail@gmail.com" name="Mail">
      </div>
    <div>
        <label for="message*">Message<span class="text-rouge">*</span></label>
        <textarea class="h4 flex rounded-lg text-backgroundcolor border mb-4 px-16 py-1  border-noirfooter focus:outline-indigo focus:ring-1 focus:ring-articles lg:px-24"  id="msg" name="message" rows="5"></textarea>
      </div>
    <div class="flex item-center justify-center">
      <button class="h4 rounded-lg bg-noirfooter border border-noirfooter px-8 py-2 font-bold text-backgroundcolor hover:bg-noir"  type="submit">Envoyer</button>
      </div>
    </form>
    </section>
</template>