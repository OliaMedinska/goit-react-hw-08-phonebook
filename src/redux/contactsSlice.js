import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
    const response = await axios.get('https://6591dc248cbbf8afa96c69e2.mockapi.io/contacts/contacts');
    return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
    const response = await axios.post('https://6591dc248cbbf8afa96c69e2.mockapi.io/contacts/contacts', contact);
    return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
    await axios.delete(`https://6591dc248cbbf8afa96c69e2.mockapi.io/contacts/contacts/${contactId}`);
    return contactId;
});

const pending = (state) => {
    return {
        ...state,
        isLoading: true
    }
  };

  const rejected = (state) => {
    return {
        ...state,
        error: true,
        isLoading: false
    }
  };

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
    item: [],
    isLoading: false,
    error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            return {
                item:action.payload,
                isLoading:false,
                error:null
            }
          })
          .addCase(addContact.fulfilled, (state, action) => {
            return {
                item: [...state.item, action.payload],
                isLoading:false,
                error:null
            }
          })
          .addCase(deleteContact.fulfilled, (state, action) => {
            return {
                item: state.item.filter(contact => contact.id !== action.payload),
                isLoading: false,
                error: null
            }
          })
          .addCase(fetchContacts.pending, pending)
          .addCase(addContact.pending, pending)
          .addCase(deleteContact.pending, pending)
          .addCase(fetchContacts.rejected, rejected)
          .addCase(addContact.rejected, rejected)
          .addCase(deleteContact.rejected, rejected)
    }
});

export default contactsSlice.reducer;