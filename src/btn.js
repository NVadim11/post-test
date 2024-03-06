import { useWallet } from '@solana/wallet-adapter-react'
import axios from 'axios'
import { useState } from 'react'


function SolanaWalletButton() {
  const { publicKey, wallet } = useWallet();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://admin.prodtest1.space/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // walletAddress: publicKey?.toBase58(),
          // walletName: wallet?.name,				
						avatar: publicKey?.toBase58(),
						email: "test61312312312123123123129@test.com",
						first_name: wallet?.name,
						last_name: wallet?.name,
						birthday: 123123123123,
						country: null,
						city: null,
						gender: null,
						telegram: null,
						status: 1,
						created_at: "2024-03-06T13:33:14.000000Z",
						updated_at: "2024-03-06T13:33:14.000000Z",
						deleted_at: null				
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      console.log('Data submitted successfully');
    } catch (error) {
      console.error('Error submitting data:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" disabled={!publicKey || isLoading}>
        {isLoading ? 'Loading...' : 'Connect Solana Wallet'}
      </button>
    </form>
  );
}

export default SolanaWalletButton;
