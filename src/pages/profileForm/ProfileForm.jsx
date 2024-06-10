// @ts-nocheck
import { Alert, Box, Button, Snackbar, Stack, TextField } from "@mui/material";
import Header from "../../components/Header";
import { useState } from "react";
import { useForm } from "react-hook-form";

/* eslint-disable no-unused-vars */
const data = [
  {
    value: "Admin",

    label: "Admin",
  },
  {
    value: "Manager",

    label: "Manager",
  },
  {
    value: "User",

    label: "User",
  },
];

const regExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp = /^\+?[1-9]\d{1,14}$/;
export default function ProfileForm() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleClick();
  };
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component={"form"}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      autoComplete="off"
    >
      <Header title="Profile Form" subTitle="Frequently Asked Questions Page" />

      <Stack gap={2} direction="row">
        <TextField
          label="Name"
          variant="filled"
          sx={{ flex: 1 }}
          error={errors.firstName}
          helperText={errors.firstName && "Name is required"}
          {...register("firstName", {
            required: true,
            maxLength: 20,
            minLength: 3,
          })}
        />
        <TextField
          {...register("lastName", {
            required: true,
            maxLength: 20,
            minLength: 3,
          })}
          label="Last Name"
          variant="filled"
          sx={{ flex: 1 }}
          error={errors.lastName}
          helperText={errors.lastName && "Last Name is required"}
        />
      </Stack>

      <TextField
        // type="email"
        {...register("email", {
          required: true,
          pattern: regExp,
        })}
        label="Email"
        variant="filled"
        error={errors.email}
        helperText={errors.email && "Email is required"}
      />
      <TextField
        {...register("contact", { required: true, pattern: phoneRegExp })}
        label="Contact Number"
        variant="filled"
        error={errors.contact}
        helperText={errors.contact && "Contact Number is required"}
      />
      <TextField
        {...register("address", { required: true, maxLength: 20 })}
        label="Adress 1"
        variant="filled"
        error={errors.address}
        helperText={errors.address && "Adress 1 is required"}
      />
      <TextField
        {...register("address2", { required: true, maxLength: 20 })}
        label="Adress 2"
        variant="filled"
        error={errors.address2}
        helperText={errors.address2 && "Adress 2 is required"}
      />
      <TextField
        variant="filled"
        id="select-role"
        select
        label="Role"
        defaultValue="User"
        SelectProps={{
          native: true,
        }}
      >
        {data.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>

      <Box textAlign={"end"}>
        <Button type="submit" variant="contained">
          Creat New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="info"
            variant="filled"
            sx={{ width: "100%" }}
          >
            This is a success Alert inside a Snackbar!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
