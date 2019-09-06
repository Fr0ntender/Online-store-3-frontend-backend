export const TRIGGER_MODAL = 'TRIGGER_MODAL';

export const triggerModal = ({ name, state }) => ({
    type: TRIGGER_MODAL,
    payload: {
        name,
        state
    }
})

export const hideActiveModals = () => (dispatch, getState) => {
    const openedModals = getState().modals.filter(({ state }) => state);

    openedModals.forEach(({ name }) => {
        dispatch(triggerModal({
            name,
            state: false
        }))
    })
}

export default function (state = [
    {
        name: 'adminIsOpen',
        state: false
    }
], action) {
    switch (action.type) {
        case TRIGGER_MODAL:
            const restModals = state.filter(({ name }) => name !== action.payload.name);

            return [
                ...restModals,
                {
                    name: action.payload.name,
                    state: action.payload.state
                }
            ];

        default:
            return state;
    }
}