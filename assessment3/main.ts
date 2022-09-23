import  fetchQuestion  from './modules/question.api';
import createQuestion  from './modules/question.component';

fetchQuestion()
.then((data) => {
    const $question = createQuestion(data[0]);

        const $app = document.getElementById('app') as HTMLElement;
        $app.innerHTML = '';
        $app.appendChild($question);
})

