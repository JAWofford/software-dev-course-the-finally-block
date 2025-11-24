/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- Run the starter code and identify the standard exceptions being thrown  
- Correct the issues and observe output

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data 

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
*/

// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================

//input validation
function validateFileData(fileName, fileData){
  if (typeof fileName !=="string" || fileName.trim() === ""){//checking for missing file name and that it's a string.
    throw new Error("Error: File name is not valid");
  }
  if (typeof fileData !=="string" || fileData.trim() === "")//checking to see if the file data is a string and not blank.
  {
    throw new Error ("Error: Data must be a string and may not be empty.");
  }
}


function processFile(fileName, fileData) {
  try {
    //Add input validation here
    validateFileData(fileName, fileData);
    
    //Implement simulated file processing here
    console.log(`Reading ${fileName}`);
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);
    
    //Add simulated file operations (reading/writing)
    console.log(`Writing ${fileData.toUpperCase()} to ${fileName}`); //simulated processing of data and writing changes to file.
    console.log(`${fileName} has been saved.`);
    
  } catch (err) {
    //Implement error handling
    console.error(err.message);

    // Implement a finally block to close resources
  } finally {
    console.log(`Closing file: ${fileName}`);
    console.log(`Processing Complete.`);
  }
  
}

// ============================================
// 🧪 Test Cases Below
// ============================================

processFile(); // ❌ ReferenceError: File name is missing
processFile("  ","All good men must come to the aid of their country.");//❌Added test case: file name is space.
processFile("myFile.txt", 42); // ❌ TypeError: File data must be a string
processFile("myFile.txt", ""); // ❌ Error: File data cannot be empty
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully
