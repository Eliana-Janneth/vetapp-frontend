import { notify } from "@kyvg/vue3-notification"

export const pushErrorToast = (title, text) => {
    notify({
        title: 'Error',
        text: 'Something went wrong',
        type: 'error',
    });
}