// src/DeliveryAddress.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./DeliveryAddress.css";

const DeliveryAddress = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ ITEMS COMING FROM CHECKOUT
  const selectedItems = location.state?.selectedItems || [];

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "9876543210",
      house: "123, ABC Apartments, MG Road",
      city: "Bangalore",
      pincode: "560001",
      state: "Karnataka",
      default: true,
    },
  ]);

  const [selectedAddressId, setSelectedAddressId] = useState(1);
  const [showForm, setShowForm] = useState(false);

  const [newAddress, setNewAddress] = useState({
    name: "",
    phone: "",
    house: "",
    city: "",
    pincode: "",
    state: "",
  });

  const handleAddAddress = () => {
    if (
      !newAddress.name ||
      !newAddress.phone ||
      !newAddress.house ||
      !newAddress.city ||
      !newAddress.pincode ||
      !newAddress.state
    ) {
      alert("Fill all address fields");
      return;
    }

    const added = {
      ...newAddress,
      id: Date.now(),
      default: false,
    };

    setAddresses((prev) => [...prev, added]);
    setSelectedAddressId(added.id);
    setShowForm(false);

    setNewAddress({
      name: "",
      phone: "",
      house: "",
      city: "",
      pincode: "",
      state: "",
    });
  };

  const handleProceed = () => {
    const selectedAddress = addresses.find(
      (a) => a.id === selectedAddressId
    );

    if (!selectedAddress) {
      alert("Select an address");
      return;
    }

    navigate("/payment", {
      state: {
        selectedItems,
        selectedAddress,
      },
    });
  };

  return (
    <div className="delivery-page">
      <h2>Delivery Address</h2>

      {addresses.map((addr) => (
        <label className="address-card" key={addr.id}>
          <input
            type="radio"
            checked={selectedAddressId === addr.id}
            onChange={() => setSelectedAddressId(addr.id)}
          />

          <div className="address-info">
            <p>
              <strong>{addr.name}</strong> | {addr.phone}
            </p>
            <p>
              {addr.house}, {addr.city} - {addr.pincode}
            </p>
            <p>{addr.state}</p>
            {addr.default && <span className="default-badge">Default</span>}
          </div>
        </label>
      ))}

      {/* ADD NEW */}
      <button
        className="add-address-btn"
        onClick={() => setShowForm(!showForm)}
      >
        + Add New Address
      </button>

      {showForm && (
        <div className="address-form">
          <input placeholder="Full Name" onChange={(e) =>
            setNewAddress({ ...newAddress, name: e.target.value })
          } />
          <input placeholder="Phone" onChange={(e) =>
            setNewAddress({ ...newAddress, phone: e.target.value })
          } />
          <input placeholder="House / Street" onChange={(e) =>
            setNewAddress({ ...newAddress, house: e.target.value })
          } />
          <input placeholder="City" onChange={(e) =>
            setNewAddress({ ...newAddress, city: e.target.value })
          } />
          <input placeholder="Pincode" onChange={(e) =>
            setNewAddress({ ...newAddress, pincode: e.target.value })
          } />
          <input placeholder="State" onChange={(e) =>
            setNewAddress({ ...newAddress, state: e.target.value })
          } />

          <button className="save-address-btn" onClick={handleAddAddress}>
            Save Address
          </button>
        </div>
      )}

      <button className="proceed-btn" onClick={handleProceed}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default DeliveryAddress;
