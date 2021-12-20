<template>
  <div class="info-cards">
    <div class="info-card">
      <img src="../assets/ez.jpg" />
      <p>Кременецкий Денис Алексеевич</p>
      <p>БСБО-08-19</p>
      <p style="font-weight: 700">HTML, CSS, JS, VUE</p>
      <p></p>
    </div>
    <div class="info-card">
      <form action="">
        <input
          type="text"
          id="name"
          placeholder="Ваше имя"
          minlength="3"
          required
        />
        <input type="email" id="email" placeholder="Почта" required />
        <textarea required></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.info-cards {
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
}

.info-card {
  width: 400px;
  height: 300px;
  background-color: #212121;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.info-card form {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
form input {
  width: 300px;
  padding: 0.4rem 0 0.4rem 0.2rem;
  border-radius: 5px;
  border: none;
}
form input:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2pt #27ae60;
}
form textarea {
  border: none;
  resize: none;
  width: 300px;
  padding: 0.4rem 0 0.4rem 0.2rem;
  border-radius: 5px;
}
form textarea:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2pt #27ae60;
}
form button {
  border-radius: 5px;
  padding: 0.4rem 0.2rem;
  background-color: #27ae60;
  border: none;
}
form button:hover {
  background-color: #239e57;
}
form button:active {
  background-color: #208e4e;
}
.info-card img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 100%;
  border: 4px solid #27ae60;
}

@media screen and (max-width: 768px) {
  .info-cards {
    width: auto;
    flex-direction: column;
    gap: 16px;
  }
  .info-card {
    width: 300px;
    height: 200px;
  }
  .info-card img {
    width: 100px;
    height: 100px;
  }
  form input {
    width: 250px;
  }
  form textarea {
    width: 250px;
  }
}
</style>
