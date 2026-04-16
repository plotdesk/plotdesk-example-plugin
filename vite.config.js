import { plotdeskPlugin } from '@plotdesk/plugin-vite';

export default plotdeskPlugin({
  pages: {
    Dashboard: './resources/js/Pages/Dashboard.vue',
    Tasks: './resources/js/Pages/Tasks.vue',
    Notes: './resources/js/Pages/Notes.vue',
    Analytics: './resources/js/Pages/Analytics.vue',
  },
  payloads: {
    TaskCreated: './resources/js/Payloads/TaskCreated.vue',
    TaskList: './resources/js/Payloads/TaskList.vue',
    NoteCard: './resources/js/Payloads/NoteCard.vue',
    NoteList: './resources/js/Payloads/NoteList.vue',
    NoteSummary: './resources/js/Payloads/NoteSummary.vue',
    TextAnalysis: './resources/js/Payloads/TextAnalysis.vue',
    Translation: './resources/js/Payloads/Translation.vue',
    Entities: './resources/js/Payloads/Entities.vue',
    WebhookResult: './resources/js/Payloads/WebhookResult.vue',
  },
  interfaces: {
    Dashboard: './resources/js/Interfaces/Dashboard.vue',
    Kanban: './resources/js/Interfaces/Kanban.vue',
  },
});
