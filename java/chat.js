const SERVER_URL = 'http://100.25.109.129:3333'

const opinions = document.querySelector('.opinions')

document.querySelector('.form').addEventListener('submit', submitForm)

async function submitForm(e) {
    e.preventDefault()

    const opinion = e.target[0].value

    const {data} = axios.post(`${SERVER_URL}/opinion/new`, {
        content: opinion
    })

    console.log(data)
}

async function getAllOpinions() {
    const opinionsContainer = document.querySelector('.opinions')
    // const {data} = axios.get(`${SERVER_URL}/opinion/list`)

    const fakeData = ["Teste 1", "Teste 2", "Teste 3", "Teste 4", "Teste 5", "Teste 6", "Teste 1", "Teste 2", "Teste 3", "Teste 4", "Teste 5", "Teste 6", "fir fir da o rego pra tropa do fafa"]
    fakeData.forEach(o => {
        const li = `<li class="opinion">
        <strong>Anônimo</strong>
        <p>${o}</p>
    </li>`

        opinionsContainer.innerHTML += li
    })
}

getAllOpinions()