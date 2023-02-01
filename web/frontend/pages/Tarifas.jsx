import {DropZone, Stack, Thumbnail, TextStyle, Page, Card} from '@shopify/polaris';
import {NoteMinor} from '@shopify/polaris-icons';
import {useState, useCallback} from 'react';
import * as XLSX from "xlsx";

export default function Tarifas() {
  // const [file, setFile] = useState();

  const handleFileUpload = (event) => {
    let fileObj = event.target.files[0];
    console.log(fileObj);
    let workbook = XLSX.read(fileObj, { type: 'binary' });
    console.log("poincho");
    let firstSheet = workbook.SheetNames[0];
    let worksheet = workbook.Sheets[firstSheet];
    let data = XLSX.utils.sheet_to_json(worksheet);
    this.setState({ dataLoaded: true, data: data });
    console.log(data);
  };

  // const handleDropZoneDrop = useCallback(
  //   (_dropFiles, acceptedFiles, _rejectedFiles) =>
  //     setFile((file) => acceptedFiles[0]),
  //   [],
  // );

  // // const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

  // console.log(file);  

  // const fileUpload = !file && <DropZone.FileUpload />;
  // const uploadedFile = file && (
  //   <Stack>
  //     <Thumbnail
  //       size="small"
  //       alt={file.name}
  //       source={
  //          window.URL.createObjectURL(file)
  //           // : NoteMinor
  //       }
  //     />
  //     <div>
  //       {file.name}{' '}
  //     </div>
  //   </Stack>
  // );

  return (
    <Page>
       <Card title="Importar XLSX" sectioned>
      <input type="file" onChange={handleFileUpload} />
        </Card>
      {/* <DropZone allowMultiple={false} onDrop={handleDropZoneDrop}>
        {uploadedFile}
        {fileUpload}
      </DropZone> */}
    </Page>
  );
}