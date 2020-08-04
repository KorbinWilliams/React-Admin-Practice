import * as React from "react";
import {
  // @ts-ignore
  List,
  // @ts-ignore
  Datagrid,
  // @ts-ignore
  TextField,
  // @ts-ignore
  ReferenceField,
  // @ts-ignore
  EditButton,
  // @ts-ignore
  Edit,
  // @ts-ignore
  SimpleForm,
  // @ts-ignore
  ReferenceInput,
  // @ts-ignore
  SelectInput,
  // @ts-ignore
  TextInput,
  // @ts-ignore
  Create,
  // @ts-ignore
} from "react-admin";

export const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
          {/* <TextField source="id" /> */}
        </ReferenceField>
        <TextField source="title" />
        {/* <TextField source="body" /> */}
        <EditButton />
      </Datagrid>
    </List>
  );
};

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};
export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="username" />
      </ReferenceInput>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);
