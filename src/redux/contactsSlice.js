import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    createContactData: {
      prepare({ name, number }) {
        return { payload: { name, number, id: nanoid() } };
      },
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    handleDelete: (state, action) =>
      state.filter(el => el.id !== action.payload),
  },
});

export const { createContactData, handleDelete } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
