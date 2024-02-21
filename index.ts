import prompt from 'prompts';
import {exec} from 'child_process';


prompt({
    type: 'select',
    name: 'id',
    message: 'Выберите презентацию:',
    choices: [
        {
            title: '01-VCS Intro',
            description: 'Вводная лекция про системы контроля версий и чуть-чуть про Git',
            value: '01-vcs-intro.md'
        },
        {
            title: '02-Git branching',
            description: 'Про ветвление в Git-е',
            value: '02-git-branching.md'
        },
    ]
}).then(({id}) => {
    if (!id) {
        throw new Error('Отмена');
    }

    console.info('⚙️ Подготавливаем лекцию');
    return exec(`slidev --open ${id}`);
}).then(() => {
    console.info('🚀 Запускаем http://localhost:3030');
});