import { request, gql } from "graphql-request";

const graphqlAPI =
  "https://api-ca-central-1.hygraph.com/v2/cll80jvds0u6w01uj7a3odxe3/master";

export const submitFormData = async (formData, date, selectedPlan) => {
    const mutation = gql`
      mutation CreatePickupRequests($data: PickupRequestsCreateInput!) {
        createPickupRequests(data: $data) {
          id
        }
      }
    `;

  const variables = {
    data: {
      description: formData.description,
      labelType: formData.labelType,
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      pickupAddress: formData.address,
      pickupDate: date, // Assuming you're passing the date parameter correctly
      plan: selectedPlan,
      specialInstructions: formData.additionalInfo,
      street: formData.apt,
      zipCode: formData.zip,
      returnLabelImage: formData.returnLabelFile[0],
    },
  };

  try {
    const result = await request(graphqlAPI, mutation, variables);
    return result;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
};
