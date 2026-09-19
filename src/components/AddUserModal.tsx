import { useState } from "react";
import { Plus, X } from "lucide-react";

interface AddUserModalProps {
  open: boolean;
  onClose: () => void;
  onAddUser: (name: string) => boolean;
}

export function AddUserModal({
  open,
  onClose,
  onAddUser,
}: AddUserModalProps) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  if (!open) {
    return null;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim()) {
      setError("Ingresá el nombre del usuario.");
      return;
    }

    const created = onAddUser(name);

    if (!created) {
      setError("Ese usuario ya existe.");
      return;
    }

    setName("");
    setError("");
    onClose();
  }

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-user-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        <h2 id="add-user-title">Agregar usuario</h2>

        <p>
          Cada usuario mantiene su propio progreso guardado en este dispositivo.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="user-name">Nombre del usuario</label>

          <input
            id="user-name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setError("");
            }}
            placeholder="Ejemplo: Jorge"
            autoFocus
          />

          {error && <span className="form-error">{error}</span>}

          <button type="submit" className="primary-button modal-submit">
            <Plus size={18} />
            Crear usuario
          </button>
        </form>
      </div>
    </div>
  );
}