export interface Database {
  public: {
    Tables: {
      tenants: {
        Row: {
          id: string
          name: string
          domain: string | null
          settings: Json | null
          created_at: string
          updated_at: string
          is_active: boolean
        }
        Insert: {
          id?: string
          name: string
          domain?: string | null
          settings?: Json | null
          created_at?: string
          updated_at?: string
          is_active?: boolean
        }
        Update: {
          id?: string
          name?: string
          domain?: string | null
          settings?: Json | null
          created_at?: string
          updated_at?: string
          is_active?: boolean
        }
      }
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          role: 'super_admin' | 'client' | 'sales_rep'
          tenant_id: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
          is_active: boolean
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          role: 'super_admin' | 'client' | 'sales_rep'
          tenant_id?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
          is_active?: boolean
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          role?: 'super_admin' | 'client' | 'sales_rep'
          tenant_id?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
          is_active?: boolean
        }
      }
      leads: {
        Row: {
          id: string
          tenant_id: string
          assigned_sales_rep_id: string | null
          company_name: string
          contact_name: string
          email: string
          phone: string | null
          status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed_won' | 'closed_lost'
          value: number | null
          source: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          assigned_sales_rep_id?: string | null
          company_name: string
          contact_name: string
          email: string
          phone?: string | null
          status?: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed_won' | 'closed_lost'
          value?: number | null
          source?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          tenant_id?: string
          assigned_sales_rep_id?: string | null
          company_name?: string
          contact_name?: string
          email?: string
          phone?: string | null
          status?: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed_won' | 'closed_lost'
          value?: number | null
          source?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      activities: {
        Row: {
          id: string
          lead_id: string
          user_id: string
          tenant_id: string
          type: 'call' | 'email' | 'meeting' | 'note' | 'task'
          title: string
          description: string | null
          completed: boolean
          due_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          lead_id: string
          user_id: string
          tenant_id: string
          type: 'call' | 'email' | 'meeting' | 'note' | 'task'
          title: string
          description?: string | null
          completed?: boolean
          due_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          lead_id?: string
          user_id?: string
          tenant_id?: string
          type?: 'call' | 'email' | 'meeting' | 'note' | 'task'
          title?: string
          description?: string | null
          completed?: boolean
          due_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      communications: {
        Row: {
          id: string
          lead_id: string
          sender_id: string
          tenant_id: string
          message: string
          is_internal: boolean
          created_at: string
        }
        Insert: {
          id?: string
          lead_id: string
          sender_id: string
          tenant_id: string
          message: string
          is_internal?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          lead_id?: string
          sender_id?: string
          tenant_id?: string
          message?: string
          is_internal?: boolean
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_current_tenant_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      user_role: 'super_admin' | 'client' | 'sales_rep'
      lead_status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed_won' | 'closed_lost'
      activity_type: 'call' | 'email' | 'meeting' | 'note' | 'task'
    }
  }
}

type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never 