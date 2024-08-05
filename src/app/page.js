'use client'


import { useState, useEffect } from "react";
import { Box, Stack, Typography, Button, Modal, TextField } from '@mui/material'
import { firestore } from '@/firebase'
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  deleteDoc,
  getDoc,
  updateDoc
} from 'firebase/firestore'


const style = {
  position: 'absolute',
  top: "50%",
  left: "50%",
  transform: 'translate(-50%,-50%)',
  width: 400,
  bgcolor: "white",
  border: '2px solid #00',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
}

export default function Home() {

  const [open, setOpen] = useState(false)

  const [inventory, setInventory] = useState([])

  const [itemName, setItemName] = useState('')
  const [updateName, setupdatedName] = useState('')
  const [edit, setEditOpen] = useState(false)

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList = []
    docs.forEach((doc) => {
      // change to id then add quanity and date
      inventoryList.push({ id: doc.id, ...doc.data() })
    })
    setInventory(inventoryList)
  }
  // add quantity too
  const addItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDoc(docRef)
    console.log(docSnap)
    if (docSnap.exists()) {
      const { quantity } = docSnap.data()
      await setDoc(docRef, { quantity: quantity + 1 }, { merge: true })
    } else {
      await setDoc(docRef, { name: item, quantity: 1 })
    }
    await updateInventory()
  }
  // add quantity too
  const updateItem = async (item, update) => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docSnap = await getDoc(docRef)
    const { quantity } = docSnap.data()
    await updateDoc(docRef, { name: update, quantity: quantity }, { merge: true })
    await updateInventory();
    setItemName('')

  }

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const { quantity } = docSnap.data()
      if (quantity === 1) {
        await deleteDoc(docRef)
      } else {
        await setDoc(docRef, { name: item, quantity: quantity - 1 })
      }
    }
    await updateInventory()
  }

  //modal control
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleEditOpen = () => setEditOpen(true)
  const handleEditClose = () => setEditOpen(false)

  useEffect(() => {
    updateInventory()

  }, [])

  return (
    <Box
      width="100vw"
      height="100vh"
      display={"flex"}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'center'}
      gap={2}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component='h2'>
            Add Item
          </Typography>
          <Stack width="100%" direction={"row"} spacing={2}>
            <TextField
              id="outlined-basic"
              label="Item"
              variant="outlined"
              fullWidth
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <Button
              variant="outlined"
              onClick={() => {
                addItem(itemName)
                setItemName('')
                handleClose()
              }}
            >
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>
      {/* <----------------------------EDIT MODAL-------------------> */}
      <Modal
        open={edit}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component='h2'>
            Edit Item
          </Typography>
          <Stack width="100%" direction={"row"} spacing={2}>
            <TextField
              id="outlined-basic"
              label="Item"
              variant="outlined"
              fullWidth
              value={updateName}
              onChange={(e) => setupdatedName(e.target.value)}
            />
            <Button
              variant="outlined"
              onClick={() => {
                updateItem(itemName, updateName)
                // setItemName('')
                handleEditClose()
              }}
            >
              Edit
            </Button>
          </Stack>
        </Box>
      </Modal>
      {/* <----------------------------EDIT MODAL-------------------> */}


      <Button
        variant="contained" onClick={handleOpen}>
        Add New Item
      </Button>
      <Box border={'1px solid #333'}>
        <Box
          width="800px"
          height="100px"
          bgcolor={'#ADD8E6'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={"center"}
        >
          <Typography variant={'h2'} color={'#333'} textAlign={'center'}>
            Inventory Items
          </Typography>
        </Box>
        <Stack width="800px" height="300px" spacing={2} overflow={'auto'}>
          {console.log(inventory)}
          {inventory.map((item) => (
            <Box
              key={item.name}
              width="100%"
              minHeight='150px'
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              bgcolor={'#f0f0f0'}
              paddingX={5}
            >
              <Typography variant={'h3'} color={'#333'} textAlign={'center'}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Typography>
              <Typography variant={'h3'} color={'#333'} textAlign={'center'}>
                Quantity: {item.quantity}
              </Typography>
              <Button variant="contained" onClick={() => { removeItem(item.id) }}>
                -
              </Button>
              <Button variant="contained" onClick={() => { addItem(item.id) }}>
                +
              </Button>
              <Button variant='contained' onClick={() => {
                setupdatedName(item.name)
                setItemName(item.id)
                handleEditOpen()
              }}>
                Edit
              </Button>
            </Box>
          ))}

        </Stack>
      </Box >
    </Box >

  );
}
{/* <Typography variant="h1">Inventory Management</Typography> */ }
